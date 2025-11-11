import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Vote } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Candidate {
  id: string;
  name: string;
  party: string;
  image_url: string;
  description: string;
  proposals: string[];
}

type ElectionCategory = 'presidencial' | 'distrital' | 'regional';

const Voting = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [votedFor, setVotedFor] = useState<Record<ElectionCategory, string | null>>({
    presidencial: null,
    distrital: null,
    regional: null
  });
  const [loading, setLoading] = useState(true);
  const [showVoteDialog, setShowVoteDialog] = useState(false);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ElectionCategory>('presidencial');
  const [activeCategory, setActiveCategory] = useState<ElectionCategory>('presidencial');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchCandidates();
    if (user) {
      checkExistingVote();
    }

    // Setup realtime subscription for votes
    const channel = supabase
      .channel('votes-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'votes'
        },
        () => {
          fetchCandidates();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const fetchCandidates = async () => {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .order('name');

    if (!error && data) {
      setCandidates(data);
    }
    setLoading(false);
  };

  const checkExistingVote = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('votes')
      .select('candidate_id, category')
      .eq('user_id', user.id);

    if (data) {
      const votes: Record<ElectionCategory, string | null> = {
        presidencial: null,
        distrital: null,
        regional: null
      };
      
      data.forEach((vote: any) => {
        votes[vote.category as ElectionCategory] = vote.candidate_id;
      });
      
      setVotedFor(votes);
    }
  };

  const handleVote = (candidateId: string, category: ElectionCategory) => {
    if (!user) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para votar",
        variant: "destructive",
      });
      return;
    }

    if (votedFor[category]) {
      toast({
        title: "Ya votaste en esta categoría",
        description: `Solo puedes votar una vez en ${category}`,
        variant: "destructive",
      });
      return;
    }

    setSelectedCandidateId(candidateId);
    setSelectedCategory(category);
    setShowVoteDialog(true);
  };

  const submitVote = async () => {
    if (!selectedCandidateId || !user) return;

    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, complete todos los campos",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('votes')
      .insert({
        user_id: user.id,
        candidate_id: selectedCandidateId,
        category: selectedCategory,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      });

    if (error) {
      toast({
        title: "Error",
        description: "No se pudo registrar tu voto",
        variant: "destructive",
      });
    } else {
      setVotedFor({ ...votedFor, [selectedCategory]: selectedCandidateId });
      setShowVoteDialog(false);
      setFormData({ fullName: '', email: '', phone: '', address: '' });
      toast({
        title: "¡Voto registrado!",
        description: `Tu voto en ${selectedCategory} ha sido registrado exitosamente`,
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Cargando candidatos...</div>
      </div>
    );
  }

  const filteredCandidates = candidates.filter(c => (c as any).category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Elecciones 2025</h1>
        <p className="text-lg text-muted-foreground">Selecciona tu candidato preferido en cada categoría</p>
      </div>

      <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as ElectionCategory)} className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="presidencial">
            Presidencial
            {votedFor.presidencial && <CheckCircle2 className="ml-2 h-4 w-4" />}
          </TabsTrigger>
          <TabsTrigger value="distrital">
            Distrital
            {votedFor.distrital && <CheckCircle2 className="ml-2 h-4 w-4" />}
          </TabsTrigger>
          <TabsTrigger value="regional">
            Regional
            {votedFor.regional && <CheckCircle2 className="ml-2 h-4 w-4" />}
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCandidates.map((candidate) => (
          <Card
            key={candidate.id}
            className={`shadow-medium transition-all hover:shadow-strong ${
              votedFor[activeCategory] === candidate.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{candidate.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">
                    {candidate.party}
                  </Badge>
                  <CardDescription className="text-sm">{candidate.description}</CardDescription>
                </div>
                {votedFor[activeCategory] === candidate.id && (
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 ml-2" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <img
                src={candidate.image_url}
                alt={candidate.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-foreground">Propuestas:</h4>
                <ul className="space-y-1">
                  {candidate.proposals.map((proposal, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{proposal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => handleVote(candidate.id, activeCategory)}
                disabled={votedFor[activeCategory] !== null}
                className="w-full mt-4"
                variant={votedFor[activeCategory] === candidate.id ? 'default' : 'outline'}
              >
                {votedFor[activeCategory] === candidate.id ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Voto Registrado
                  </>
                ) : (
                  <>
                    <Vote className="mr-2 h-4 w-4" />
                    Votar
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={showVoteDialog} onOpenChange={setShowVoteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ingrese sus datos personales</DialogTitle>
            <DialogDescription>
              Por favor, complete sus datos para registrar su voto.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Ingrese su nombre completo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ingrese su teléfono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Ingrese su dirección"
              />
            </div>
            <Button onClick={submitVote} className="w-full">
              Confirmar Voto
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Voting;

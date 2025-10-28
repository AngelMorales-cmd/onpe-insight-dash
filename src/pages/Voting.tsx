import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Vote } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Candidate {
  id: string;
  name: string;
  party: string;
  image_url: string;
  description: string;
  proposals: string[];
}

const Voting = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [votedFor, setVotedFor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchCandidates();
    if (user) {
      checkExistingVote();
    }
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
      .select('candidate_id')
      .eq('user_id', user.id)
      .maybeSingle();

    if (data) {
      setVotedFor(data.candidate_id);
    }
  };

  const handleVote = async (candidateId: string) => {
    if (!user) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para votar",
        variant: "destructive",
      });
      return;
    }

    if (votedFor) {
      toast({
        title: "Ya votaste",
        description: "Solo puedes votar una vez",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('votes')
      .insert({
        user_id: user.id,
        candidate_id: candidateId,
      });

    if (error) {
      toast({
        title: "Error",
        description: "No se pudo registrar tu voto",
        variant: "destructive",
      });
    } else {
      setVotedFor(candidateId);
      toast({
        title: "¡Voto registrado!",
        description: "Tu voto ha sido registrado exitosamente",
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Elecciones Presidenciales 2025</h1>
        <p className="text-lg text-muted-foreground">Selecciona tu candidato preferido</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {candidates.map((candidate) => (
          <Card
            key={candidate.id}
            className={`shadow-medium transition-all hover:shadow-strong ${
              votedFor === candidate.id ? 'ring-2 ring-primary' : ''
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
                {votedFor === candidate.id && (
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
                onClick={() => handleVote(candidate.id)}
                disabled={votedFor !== null}
                className="w-full mt-4"
                variant={votedFor === candidate.id ? 'default' : 'outline'}
              >
                {votedFor === candidate.id ? (
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
    </div>
  );
};

export default Voting;

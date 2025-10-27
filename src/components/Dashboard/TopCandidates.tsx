import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy, TrendingUp } from 'lucide-react';

interface Candidate {
  name: string;
  party: string;
  votes: number;
  percentage: number;
  color: string;
}

const TopCandidates = () => {
  // Datos simulados de candidatos más votados
  const candidates: Candidate[] = [
    { name: 'María González', party: 'Partido Progresista', votes: 4850000, percentage: 35.2, color: 'hsl(215 100% 50%)' },
    { name: 'Carlos Ramírez', party: 'Alianza Nacional', votes: 3920000, percentage: 28.5, color: 'hsl(348 100% 45%)' },
    { name: 'Ana Martínez', party: 'Movimiento Ciudadano', votes: 2740000, percentage: 19.9, color: 'hsl(160 60% 45%)' },
    { name: 'José Torres', party: 'Frente Democrático', votes: 1890000, percentage: 13.7, color: 'hsl(40 90% 50%)' },
    { name: 'Laura Sánchez', party: 'Partido Liberal', votes: 370000, percentage: 2.7, color: 'hsl(280 60% 50%)' },
  ];

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Candidatos Más Votados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all hover:shadow-medium"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{candidate.name}</h4>
                    <p className="text-sm text-muted-foreground">{candidate.party}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xl font-bold text-foreground">
                    {candidate.percentage}%
                    {index < 2 && <TrendingUp className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {candidate.votes.toLocaleString('es-PE')} votos
                  </p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 top-0 opacity-10 transition-all"
                style={{
                  width: `${candidate.percentage}%`,
                  backgroundColor: candidate.color,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Total de votos computados:</span>{' '}
            {candidates.reduce((sum, c) => sum + c.votes, 0).toLocaleString('es-PE')}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Datos procesados con Pandas, NumPy y modelos predictivos de Scikit-Learn
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCandidates;

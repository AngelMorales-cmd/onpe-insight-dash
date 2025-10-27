import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from '@/contexts/DataContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BarChartComponent from '@/components/Charts/BarChartComponent';
import LineChartComponent from '@/components/Charts/LineChartComponent';
import PieChartComponent from '@/components/Charts/PieChartComponent';
import RadialChartComponent from '@/components/Charts/RadialChartComponent';
import { TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const { csvData, modelConfig } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!csvData || !modelConfig.isComplete) {
      navigate('/upload');
    }
  }, [csvData, modelConfig, navigate]);

  // Mock data for demonstration
  const barData = [
    { name: 'Región Norte', votos: 45000 },
    { name: 'Región Centro', votos: 52000 },
    { name: 'Región Sur', votos: 38000 },
    { name: 'Región Este', votos: 41000 },
    { name: 'Región Oeste', votos: 47000 },
  ];

  const lineData = [
    { name: '2016', participacion: 75 },
    { name: '2018', participacion: 78 },
    { name: '2020', participacion: 82 },
    { name: '2022', participacion: 79 },
    { name: '2024', participacion: 85 },
  ];

  const pieData = [
    { name: 'Partido A', value: 35 },
    { name: 'Partido B', value: 28 },
    { name: 'Partido C', value: 22 },
    { name: 'Partido D', value: 15 },
  ];

  const radialData = [
    { name: 'Precisión', accuracy: 92, fill: 'hsl(215 100% 32%)' },
    { name: 'Recall', accuracy: 88, fill: 'hsl(348 100% 45%)' },
    { name: 'F1-Score', accuracy: 90, fill: 'hsl(215 85% 55%)' },
  ];

  const metrics = [
    {
      title: 'Total de Votos',
      value: '223,000',
      icon: Users,
      color: 'text-primary',
    },
    {
      title: 'Tasa de Participación',
      value: '85%',
      icon: TrendingUp,
      color: 'text-secondary',
    },
    {
      title: 'Precisión del Modelo',
      value: '92%',
      icon: Target,
      color: 'text-primary',
    },
    {
      title: 'Análisis Completado',
      value: 'Exitoso',
      icon: CheckCircle,
      color: 'text-secondary',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Dashboard de Análisis</h1>
            <p className="text-muted-foreground">
              Resultados del análisis electoral con visualizaciones interactivas
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            Modelo: {modelConfig.modelType || 'No especificado'}
          </Badge>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="shadow-medium">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <p className="mt-2 text-2xl font-bold text-foreground">{metric.value}</p>
                  </div>
                  <Icon className={`h-10 w-10 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <BarChartComponent data={barData} title="Distribución de Votos por Región" />
        <LineChartComponent data={lineData} title="Evolución de Participación Electoral" />
        <PieChartComponent data={pieData} title="Porcentaje de Votos por Partido" />
        <RadialChartComponent data={radialData} title="Métricas de Precisión del Modelo" />
      </div>

      {/* Summary Card */}
      <Card className="mt-8 shadow-medium">
        <CardHeader>
          <CardTitle>Resumen del Análisis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              <strong>Archivo procesado:</strong> {csvData?.fileName || 'No disponible'}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Registros analizados:</strong> {csvData?.rows.length.toLocaleString() || 0}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Variables consideradas:</strong> {csvData?.headers.length || 0}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Modelo utilizado:</strong> {modelConfig.modelType || 'No especificado'}
            </p>
            <p className="text-sm text-card-foreground">
              El análisis se completó exitosamente. Los resultados muestran patrones significativos
              en la distribución electoral y alta precisión en las predicciones del modelo.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

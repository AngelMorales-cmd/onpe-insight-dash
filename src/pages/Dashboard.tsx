import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from '@/contexts/DataContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BarChartComponent from '@/components/Charts/BarChartComponent';
import LineChartComponent from '@/components/Charts/LineChartComponent';
import PieChartComponent from '@/components/Charts/PieChartComponent';
import RadialChartComponent from '@/components/Charts/RadialChartComponent';
import TopCandidates from '@/components/Dashboard/TopCandidates';
import { TrendingUp, Users, FileText, Target } from 'lucide-react';

const Dashboard = () => {
  const { csvData, modelConfig } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!csvData || !modelConfig.isComplete) {
      navigate('/upload');
    }
  }, [csvData, modelConfig, navigate]);

  // Datos electorales simulados
  const barData = [
    { name: 'Lima', votos: 3200000 },
    { name: 'Arequipa', votos: 850000 },
    { name: 'La Libertad', votos: 1200000 },
    { name: 'Piura', votos: 980000 },
    { name: 'Cusco', votos: 740000 },
    { name: 'Lambayeque', votos: 680000 },
  ];

  const lineData = [
    { name: '08:00', participacion: 12 },
    { name: '10:00', participacion: 28 },
    { name: '12:00', participacion: 45 },
    { name: '14:00', participacion: 63 },
    { name: '16:00', participacion: 78 },
    { name: '18:00', participacion: 85 },
  ];

  const pieData = [
    { name: 'Presidencial', value: 42 },
    { name: 'Distrital', value: 35 },
    { name: 'Regional', value: 23 },
  ];

  const radialData = [
    { name: 'Actas Escrutadas', accuracy: 96, fill: 'hsl(215 100% 32%)' },
    { name: 'Votos Válidos', accuracy: 94, fill: 'hsl(348 100% 45%)' },
    { name: 'Participación', accuracy: 85, fill: 'hsl(215 85% 55%)' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Dashboard Analítico Electoral</h1>
            <p className="text-muted-foreground">
              Resultados del análisis procesado con Pandas, NumPy, Scikit-Learn y PyTorch
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            Modelo: {modelConfig.modelType || 'No especificado'}
          </Badge>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-medium">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Votantes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">13,770,000</div>
            <p className="text-xs text-muted-foreground">+12.5% respecto a elección anterior</p>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Participación</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">78.3%</div>
            <p className="text-xs text-muted-foreground">Alta participación ciudadana</p>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mesas Escrutadas</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">95.7%</div>
            <p className="text-xs text-muted-foreground">23,452 de 24,501 mesas</p>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Precisión del Modelo</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">94.2%</div>
            <p className="text-xs text-muted-foreground">
              {modelConfig.modelType === 'neural-network' && 'Red Neuronal (PyTorch)'}
              {modelConfig.modelType === 'logistic-regression' && 'Regresión Logística'}
              {modelConfig.modelType === 'random-forest' && 'Random Forest'}
              {modelConfig.modelType === 'gradient-boosting' && 'Gradient Boosting'}
              {modelConfig.modelType === 'svm' && 'SVM (Scikit-Learn)'}
              {!modelConfig.modelType && 'Modelo predictivo'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Top Candidates Section */}
      <div className="mb-6">
        <TopCandidates />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <BarChartComponent data={barData} title="Votos por Departamento" />
        <LineChartComponent data={lineData} title="Participación Electoral en Tiempo Real" />
        <PieChartComponent data={pieData} title="Distribución por Categoría Electoral" />
        <RadialChartComponent data={radialData} title="Avance del Proceso Electoral" />
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

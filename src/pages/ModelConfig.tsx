import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDataContext } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2, PlayCircle, Database } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ModelConfig = () => {
  const { csvData, cleaningOptions, modelConfig, setModelConfig } = useDataContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleProcessData = async () => {
    if (!csvData) {
      toast({
        title: 'Error',
        description: 'Por favor, cargue un archivo CSV primero.',
        variant: 'destructive',
      });
      return;
    }

    if (!modelConfig.modelType) {
      toast({
        title: 'Error',
        description: 'Por favor, seleccione un modelo de análisis.',
        variant: 'destructive',
      });
      return;
    }

    setModelConfig({ ...modelConfig, isProcessing: true });
    setProgress(0);

    // Simular proceso de análisis
    const steps = [
      { name: 'Validando datos', duration: 800 },
      { name: 'Limpiando datos', duration: 1200 },
      { name: 'Normalizando variables', duration: 1000 },
      { name: 'Entrenando modelo', duration: 1500 },
      { name: 'Generando predicciones', duration: 1000 },
    ];

    let currentProgress = 0;

    for (const step of steps) {
      toast({
        title: step.name,
        description: 'Procesando...',
      });

      await new Promise((resolve) => setTimeout(resolve, step.duration));
      currentProgress += 100 / steps.length;
      setProgress(Math.min(currentProgress, 100));
    }

    setModelConfig({ ...modelConfig, isProcessing: false, isComplete: true });
    
    toast({
      title: 'Proceso completado',
      description: 'El análisis se ha realizado exitosamente.',
    });

    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Selección de Modelo</h1>
        <p className="text-muted-foreground">
          Elija el modelo de Machine Learning para el análisis predictivo electoral
        </p>
      </div>

      {!csvData ? (
        <Card className="shadow-medium">
          <CardContent className="py-12 text-center">
            <Database className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">
              No hay datos cargados. Por favor, cargue un archivo CSV primero.
            </p>
            <Button onClick={() => navigate('/upload')} className="mt-4">
              Cargar Datos
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Opciones de Limpieza Seleccionadas</CardTitle>
              <CardDescription>
                Revise las operaciones de preprocesamiento configuradas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-border bg-accent/30 p-3">
                <span className="text-sm font-medium">Manejar valores nulos</span>
                <span className={`text-sm ${cleaningOptions.handleNulls ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {cleaningOptions.handleNulls ? 'Activado' : 'Desactivado'}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-accent/30 p-3">
                <span className="text-sm font-medium">Normalizar datos</span>
                <span className={`text-sm ${cleaningOptions.normalizeData ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {cleaningOptions.normalizeData ? 'Activado' : 'Desactivado'}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-accent/30 p-3">
                <span className="text-sm font-medium">Codificar variables categóricas</span>
                <span className={`text-sm ${cleaningOptions.encodeCategories ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {cleaningOptions.encodeCategories ? 'Activado' : 'Desactivado'}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/cleaning')}
                className="w-full mt-2"
              >
                Modificar configuración de limpieza
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Selección de Modelo de Machine Learning</CardTitle>
              <CardDescription>
                Elija el algoritmo que se ejecutará con Scikit-Learn o PyTorch
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select
                value={modelConfig.modelType}
                onValueChange={(value) => setModelConfig({ ...modelConfig, modelType: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione un modelo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="logistic-regression">
                    Regresión Logística (Scikit-Learn)
                  </SelectItem>
                  <SelectItem value="random-forest">
                    Random Forest (Scikit-Learn)
                  </SelectItem>
                  <SelectItem value="neural-network">
                    Red Neuronal (PyTorch)
                  </SelectItem>
                  <SelectItem value="gradient-boosting">
                    Gradient Boosting (XGBoost)
                  </SelectItem>
                  <SelectItem value="svm">
                    Support Vector Machine (Scikit-Learn)
                  </SelectItem>
                </SelectContent>
              </Select>

              {modelConfig.modelType && (
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <h4 className="mb-2 font-medium text-foreground">Modelo seleccionado</h4>
                  <p className="text-sm text-muted-foreground">
                    {modelConfig.modelType === 'logistic-regression' && 'Regresión Logística - Ideal para clasificación binaria y multiclase'}
                    {modelConfig.modelType === 'random-forest' && 'Random Forest - Ensemble de árboles de decisión, robusto y preciso'}
                    {modelConfig.modelType === 'neural-network' && 'Red Neuronal - Deep Learning con PyTorch para patrones complejos'}
                    {modelConfig.modelType === 'gradient-boosting' && 'Gradient Boosting - XGBoost para máxima precisión predictiva'}
                    {modelConfig.modelType === 'svm' && 'Support Vector Machine - Clasificación con margen máximo'}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {modelConfig.isProcessing && (
            <Card className="shadow-medium">
              <CardContent className="py-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    <span className="text-lg font-medium">Procesando análisis...</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    Este proceso puede tomar unos momentos. Por favor espere.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end">
            <Button
              size="lg"
              onClick={handleProcessData}
              disabled={modelConfig.isProcessing || !modelConfig.modelType}
              className="shadow-medium"
            >
              {modelConfig.isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Ejecutar Análisis
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelConfig;

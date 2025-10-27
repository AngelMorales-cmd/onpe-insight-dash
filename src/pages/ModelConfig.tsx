import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDataContext } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2, PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ModelConfig = () => {
  const { csvData, cleaningOptions, setCleaningOptions, modelConfig, setModelConfig } = useDataContext();
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
        <h1 className="mb-2 text-3xl font-bold text-foreground">Configuración de Análisis</h1>
        <p className="text-muted-foreground">
          Configure las opciones de limpieza de datos y seleccione el modelo de análisis
        </p>
      </div>

      {!csvData ? (
        <Card className="shadow-medium">
          <CardContent className="py-12 text-center">
            <p className="text-lg text-muted-foreground">
              No hay datos cargados. Por favor, cargue un archivo CSV primero.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Limpieza de Datos</CardTitle>
              <CardDescription>
                Seleccione las operaciones de preprocesamiento que desea aplicar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="handleNulls"
                  checked={cleaningOptions.handleNulls}
                  onCheckedChange={(checked) =>
                    setCleaningOptions({ ...cleaningOptions, handleNulls: checked as boolean })
                  }
                />
                <Label htmlFor="handleNulls" className="cursor-pointer">
                  Manejar valores nulos (imputación automática)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="normalizeData"
                  checked={cleaningOptions.normalizeData}
                  onCheckedChange={(checked) =>
                    setCleaningOptions({ ...cleaningOptions, normalizeData: checked as boolean })
                  }
                />
                <Label htmlFor="normalizeData" className="cursor-pointer">
                  Normalizar datos numéricos (escalamiento)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="encodeCategories"
                  checked={cleaningOptions.encodeCategories}
                  onCheckedChange={(checked) =>
                    setCleaningOptions({ ...cleaningOptions, encodeCategories: checked as boolean })
                  }
                />
                <Label htmlFor="encodeCategories" className="cursor-pointer">
                  Codificar variables categóricas (One-Hot Encoding)
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Selección de Modelo</CardTitle>
              <CardDescription>
                Elija el modelo de Machine Learning para el análisis predictivo
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                </SelectContent>
              </Select>
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

import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useDataContext } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Database } from 'lucide-react';

const DataCleaning = () => {
  const { csvData, cleaningOptions, setCleaningOptions } = useDataContext();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!csvData) {
      toast({
        title: 'Error',
        description: 'Por favor, cargue un archivo CSV primero.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Configuración guardada',
      description: 'Opciones de limpieza aplicadas correctamente.',
    });

    navigate('/config');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Limpieza de Datos</h1>
        <p className="text-muted-foreground">
          Configure las opciones de preprocesamiento usando Pandas y NumPy
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
              <CardTitle>Operaciones de Preprocesamiento</CardTitle>
              <CardDescription>
                Seleccione las operaciones que se aplicarán usando Pandas y NumPy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 rounded-lg border border-border bg-accent/50 p-4">
                  <Checkbox
                    id="handleNulls"
                    checked={cleaningOptions.handleNulls}
                    onCheckedChange={(checked) =>
                      setCleaningOptions({ ...cleaningOptions, handleNulls: checked as boolean })
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="handleNulls" className="cursor-pointer font-medium">
                      Manejar valores nulos
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Imputación automática usando Pandas (fillna, interpolate)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rounded-lg border border-border bg-accent/50 p-4">
                  <Checkbox
                    id="normalizeData"
                    checked={cleaningOptions.normalizeData}
                    onCheckedChange={(checked) =>
                      setCleaningOptions({ ...cleaningOptions, normalizeData: checked as boolean })
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="normalizeData" className="cursor-pointer font-medium">
                      Normalizar datos numéricos
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Escalamiento usando NumPy y Scikit-Learn (StandardScaler, MinMaxScaler)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rounded-lg border border-border bg-accent/50 p-4">
                  <Checkbox
                    id="encodeCategories"
                    checked={cleaningOptions.encodeCategories}
                    onCheckedChange={(checked) =>
                      setCleaningOptions({ ...cleaningOptions, encodeCategories: checked as boolean })
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="encodeCategories" className="cursor-pointer font-medium">
                      Codificar variables categóricas
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      One-Hot Encoding usando Pandas (get_dummies) y Scikit-Learn
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h4 className="mb-2 font-medium text-foreground">Archivo cargado</h4>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{csvData.fileName}</span>
                  <br />
                  {csvData.rows.length} registros • {csvData.headers.length} columnas
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button size="lg" onClick={handleContinue} className="shadow-medium">
              Continuar a Selección de Modelo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCleaning;

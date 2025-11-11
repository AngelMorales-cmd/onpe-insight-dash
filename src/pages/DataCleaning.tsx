import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useDataContext } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Database } from 'lucide-react';

const DataCleaning = () => {
  const { cleaningOptions, setCleaningOptions } = useDataContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    setIsLoading(true);
    
    // Simular carga de datos en tiempo real
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Datos cargados',
      description: 'Datos electorales en tiempo real actualizados correctamente.',
    });

    setIsLoading(false);
    navigate('/config');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Datos Electorales en Tiempo Real</h1>
        <p className="text-muted-foreground">
          Configure las opciones de limpieza y preprocesamiento de datos electorales
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="shadow-medium mb-6">
          <CardHeader>
            <CardTitle>Estado de Datos en Tiempo Real</CardTitle>
            <CardDescription>
              Datos electorales actualizados automáticamente desde el sistema ONPE
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h4 className="mb-2 font-medium text-foreground">Registros Totales</h4>
                <p className="text-2xl font-bold text-foreground">13,770,000</p>
                <p className="text-xs text-muted-foreground mt-1">Votantes registrados</p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h4 className="mb-2 font-medium text-foreground">Última Actualización</h4>
                <p className="text-2xl font-bold text-foreground">En Vivo</p>
                <p className="text-xs text-muted-foreground mt-1">Sincronización continua</p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h4 className="mb-2 font-medium text-foreground">Calidad de Datos</h4>
                <p className="text-2xl font-bold text-foreground">98.5%</p>
                <p className="text-xs text-muted-foreground mt-1">Registros válidos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Opciones de Limpieza Electoral</CardTitle>
            <CardDescription>
              Configure las operaciones específicas para datos electorales
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
                    Manejar valores nulos en actas
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Completar campos vacíos en actas electorales usando interpolación
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-lg border border-border bg-accent/50 p-4">
                <Checkbox
                  id="removeDuplicates"
                  checked={cleaningOptions.removeDuplicates}
                  onCheckedChange={(checked) =>
                    setCleaningOptions({ ...cleaningOptions, removeDuplicates: checked as boolean })
                  }
                />
                <div className="space-y-1">
                  <Label htmlFor="removeDuplicates" className="cursor-pointer font-medium">
                    Eliminar votos duplicados
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Identificar y eliminar registros duplicados de votación
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
                    Normalizar datos de participación
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Estandarizar porcentajes de participación por región
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
                    Clasificar por categorías electorales
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Codificar datos por tipo: presidencial, distrital, regional
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button 
            size="lg" 
            onClick={handleContinue} 
            className="shadow-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Database className="mr-2 h-5 w-5 animate-pulse" />
                Cargando Datos...
              </>
            ) : (
              <>
                Continuar al Entrenamiento
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataCleaning;

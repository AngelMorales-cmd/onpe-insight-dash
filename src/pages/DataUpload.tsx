import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import FileUploader from '@/components/Upload/FileUploader';
import DataPreview from '@/components/Upload/DataPreview';
import { useDataContext } from '@/contexts/DataContext';
import { ArrowRight } from 'lucide-react';

const DataUpload = () => {
  const { csvData } = useDataContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Carga de Datos Electorales</h1>
        <p className="text-muted-foreground">
          Importe su archivo CSV con los datos que desea analizar
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Importar Archivo CSV</CardTitle>
            <CardDescription>
              Seleccione o arrastre un archivo CSV con datos electorales. El archivo debe incluir
              encabezados en la primera fila.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileUploader />
          </CardContent>
        </Card>

        {csvData && (
          <>
            <DataPreview />
            
            <div className="flex justify-end">
              <Link to="/config">
                <Button size="lg" className="shadow-medium">
                  Continuar al Análisis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DataUpload;

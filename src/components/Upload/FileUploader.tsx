import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileSpreadsheet } from 'lucide-react';
import { cn } from '@/lib/utils';
import Papa from 'papaparse';
import { useDataContext } from '@/contexts/DataContext';
import { useToast } from '@/hooks/use-toast';

const FileUploader = () => {
  const { setCSVData } = useDataContext();
  const { toast } = useToast();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];
      
      Papa.parse(file, {
        complete: (results) => {
          if (results.data.length < 2) {
            toast({
              title: 'Error',
              description: 'El archivo CSV debe contener al menos encabezados y una fila de datos.',
              variant: 'destructive',
            });
            return;
          }

          const headers = results.data[0] as string[];
          const rows = results.data.slice(1) as any[][];

          setCSVData({
            headers,
            rows: rows.filter(row => row.some(cell => cell !== '')),
            fileName: file.name,
          });

          toast({
            title: 'Archivo cargado',
            description: `${file.name} se ha cargado correctamente con ${headers.length} columnas.`,
          });
        },
        error: (error) => {
          toast({
            title: 'Error al procesar archivo',
            description: error.message,
            variant: 'destructive',
          });
        },
      });
    },
    [setCSVData, toast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv'],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'cursor-pointer rounded-lg border-2 border-dashed p-12 text-center transition-all',
        isDragActive
          ? 'border-primary bg-accent'
          : 'border-border bg-card hover:border-primary hover:bg-accent/50'
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-4">
        {isDragActive ? (
          <FileSpreadsheet className="h-16 w-16 text-primary" />
        ) : (
          <Upload className="h-16 w-16 text-muted-foreground" />
        )}
        <div>
          <p className="mb-2 text-lg font-semibold text-foreground">
            {isDragActive ? 'Suelte el archivo aquí' : 'Arrastre su archivo CSV aquí'}
          </p>
          <p className="text-sm text-muted-foreground">
            o haga clic para seleccionar un archivo
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;

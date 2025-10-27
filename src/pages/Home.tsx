import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Database, Settings, BarChart3, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Database,
      title: 'Carga de Datos',
      description: 'Importe archivos CSV con datos electorales de forma sencilla y rápida.',
    },
    {
      icon: Settings,
      title: 'Procesamiento Avanzado',
      description: 'Configure opciones de limpieza y seleccione modelos de análisis predictivo.',
    },
    {
      icon: BarChart3,
      title: 'Visualización Interactiva',
      description: 'Explore resultados mediante gráficos dinámicos y dashboards profesionales.',
    },
    {
      icon: CheckCircle,
      title: 'Análisis Confiable',
      description: 'Tecnología de Machine Learning para predicciones electorales precisas.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Plataforma de Análisis y Modelado Electoral
            </h1>
            <p className="mb-8 text-lg opacity-90">
              Herramienta profesional para el procesamiento, análisis y visualización de datos electorales
              utilizando técnicas avanzadas de Machine Learning.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/upload" data-tour="upload">
                <Button size="lg" variant="secondary" className="shadow-strong">
                  Comenzar Análisis
                  <Database className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Funcionalidades del Sistema
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 shadow-medium transition-all hover:shadow-strong">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-institutional">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-accent-foreground">
            ¿Listo para Analizar sus Datos?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Comience cargando su archivo CSV y siga el proceso guiado paso a paso.
          </p>
          <Link to="/upload">
            <Button size="lg" className="shadow-medium">
              Cargar Datos Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

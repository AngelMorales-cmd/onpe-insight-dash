import { useState } from 'react';
import Joyride, { Step, CallBackProps } from 'react-joyride';

interface AppTourProps {
  run: boolean;
  onComplete: () => void;
}

const AppTour = ({ run, onComplete }: AppTourProps) => {
  const [steps] = useState<Step[]>([
    {
      target: 'body',
      content: 'Bienvenido a la Plataforma de Análisis Electoral de la ONPE. Le guiaremos paso a paso en el uso del sistema.',
      placement: 'center',
    },
    {
      target: '[data-tour="upload"]',
      content: 'Primero, cargue su archivo CSV con datos electorales aquí. Puede arrastrar el archivo o hacer clic para seleccionarlo.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="config"]',
      content: 'Luego, configure las opciones de limpieza de datos y seleccione el modelo de análisis que desea utilizar.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="dashboard"]',
      content: 'Finalmente, revise los resultados del análisis en dashboards interactivos con múltiples visualizaciones.',
      disableBeacon: true,
    },
  ]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === 'finished' || status === 'skipped') {
      onComplete();
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: 'hsl(215 100% 32%)',
          zIndex: 10000,
        },
        buttonNext: {
          backgroundColor: 'hsl(215 100% 32%)',
        },
        buttonBack: {
          color: 'hsl(215 100% 32%)',
        },
      }}
      locale={{
        back: 'Atrás',
        close: 'Cerrar',
        last: 'Finalizar',
        next: 'Siguiente',
        skip: 'Saltar',
      }}
    />
  );
};

export default AppTour;

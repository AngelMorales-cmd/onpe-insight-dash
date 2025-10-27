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
      content: 'Bienvenido a la Plataforma de Análisis Electoral ONPE. Esta guía te mostrará cómo usar el sistema con Python, Pandas, NumPy, Scikit-Learn y PyTorch.',
      placement: 'center',
    },
    {
      target: '[href="/upload"]',
      content: 'Paso 1: Carga tu archivo CSV con datos electorales usando este módulo.',
      disableBeacon: true,
    },
    {
      target: '[href="/cleaning"]',
      content: 'Paso 2: Configura las opciones de limpieza de datos con Pandas y NumPy (manejo de nulos, normalización, encoding).',
      disableBeacon: true,
    },
    {
      target: '[href="/config"]',
      content: 'Paso 3: Selecciona el modelo de Machine Learning que deseas entrenar (Scikit-Learn o PyTorch).',
      disableBeacon: true,
    },
    {
      target: '[href="/dashboard"]',
      content: 'Paso 4: Visualiza los resultados, candidatos más votados y gráficos interactivos generados por los modelos.',
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

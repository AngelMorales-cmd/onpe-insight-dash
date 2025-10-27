import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CSVData {
  headers: string[];
  rows: any[][];
  fileName: string;
}

interface CleaningOptions {
  handleNulls: boolean;
  normalizeData: boolean;
  encodeCategories: boolean;
}

interface ModelConfig {
  modelType: string;
  isProcessing: boolean;
  isComplete: boolean;
}

interface DataContextType {
  csvData: CSVData | null;
  setCSVData: (data: CSVData | null) => void;
  cleaningOptions: CleaningOptions;
  setCleaningOptions: (options: CleaningOptions) => void;
  modelConfig: ModelConfig;
  setModelConfig: (config: ModelConfig) => void;
  resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [csvData, setCSVData] = useState<CSVData | null>(null);
  const [cleaningOptions, setCleaningOptions] = useState<CleaningOptions>({
    handleNulls: false,
    normalizeData: false,
    encodeCategories: false,
  });
  const [modelConfig, setModelConfig] = useState<ModelConfig>({
    modelType: '',
    isProcessing: false,
    isComplete: false,
  });

  const resetData = () => {
    setCSVData(null);
    setCleaningOptions({
      handleNulls: false,
      normalizeData: false,
      encodeCategories: false,
    });
    setModelConfig({
      modelType: '',
      isProcessing: false,
      isComplete: false,
    });
  };

  return (
    <DataContext.Provider
      value={{
        csvData,
        setCSVData,
        cleaningOptions,
        setCleaningOptions,
        modelConfig,
        setModelConfig,
        resetData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

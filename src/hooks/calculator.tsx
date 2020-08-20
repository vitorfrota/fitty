import React, {
  createContext, useCallback, useState, useContext,
} from 'react';

interface FormData {
  weight: number;
  height: number;
  gender: 'm' | 'f';
}

interface CalculatorContextData {
  setFormData(formData: FormData): void;
  data: FormData;
}

const CalculatorContext = createContext<CalculatorContextData>({} as CalculatorContextData);

const CalculatorProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as FormData);

  const setFormData = useCallback((formData: FormData) => {
    setData(formData);
  }, []);

  return (
    <CalculatorContext.Provider
      value={{
        setFormData,
        data,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

function useCalculator(): CalculatorContextData {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('useCalculator must be used within an CalculatorProvider');
  }

  return context;
}

export { CalculatorProvider, useCalculator };

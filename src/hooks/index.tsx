import React from 'react';

import { CalculatorProvider } from './calculator';

const AppProvider: React.FC = ({ children }) => (
  <CalculatorProvider>
    {children}
  </CalculatorProvider>
);

export default AppProvider;

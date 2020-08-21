import React from 'react';

import { CalculatorProvider } from './calculator';
import { RouteProvider } from './route';

const AppProvider: React.FC = ({ children }) => (
  <RouteProvider>
    <CalculatorProvider>
      {children}
    </CalculatorProvider>
  </RouteProvider>
);

export default AppProvider;

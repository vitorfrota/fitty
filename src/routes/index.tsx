import React from 'react';

import FormCalculator from '../components/FormCalculator';
import ResultCalculator from '../components/ResultCalculator';

const routes = [
  {
    path: 'form',
    component: <FormCalculator />,
  },
  {
    path: 'result',
    component: <ResultCalculator />,
  },
];

export default routes;

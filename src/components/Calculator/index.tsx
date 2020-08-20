import React from 'react';

import FormCalculator from '../FormCalculator';
import ResultCalculator from '../ResultCalculator';

import * as S from './styles';

const Calculator: React.FC = () => (
  <S.Container>
    <ResultCalculator />
    <FormCalculator />
  </S.Container>
);

export default Calculator;

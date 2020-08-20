import React from 'react';

import FormCalculator from '../FormCalculator';

import * as S from './styles';

const Calculator: React.FC = () => (
  <S.Container>
    <div>
      <h2>Resultado</h2>
    </div>
    <div>
      <FormCalculator />
    </div>
  </S.Container>
);

export default Calculator;

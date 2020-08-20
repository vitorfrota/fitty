import React from 'react';

import FormCalculator from '../FormCalculator';
import ResultCalculator from '../ResultCalculator';

import { useCalculator } from '../../hooks/calculator';

import * as S from './styles';

const Calculator: React.FC = () => {
  const { data } = useCalculator();

  return (
    <S.Container>
      {
        data.weight ? (
          <ResultCalculator />
        )
          : (
            <FormCalculator />
          )
      }
    </S.Container>
  );
};

export default Calculator;

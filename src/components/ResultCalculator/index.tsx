import React, { useMemo, useCallback } from 'react';
import Lottie from 'lottie-react-web';
import { useCalculator } from '../../hooks/calculator';

import femaleAnimation from '../../assets/animations/woman.json';
import maleAnimation from '../../assets/animations/man.json';

import * as S from './styles';

interface FormData {
  weight: number;
  height: number;
  gender: 'm' | 'f';
}

const ResultCalculator: React.FC = () => {
  const { data, setFormData } = useCalculator();

  const totalImc = useMemo(() => { // calcula o imc
    const { height, weight } = data;

    const heightToMeters = height / 100;

    const result = weight / (heightToMeters * heightToMeters);

    return Number(result.toFixed(1));
  }, [data]);

  const category = useMemo(() => {
    if (totalImc < 18.5) {
      return 'Abaixo do Peso';
    }
    if (totalImc >= 18.5 && totalImc <= 24.9) {
      return 'Peso Normal';
    }
    if (totalImc >= 25 && totalImc <= 29.9) {
      return 'Sobrepeso';
    }
    if (totalImc > 29.9) {
      return 'Obesidade';
    }

    return '';
  }, [totalImc]);

  const idealWeight = useMemo(() => {
    const { height } = data;

    const heightToMeters = height / 100;

    const min = ((heightToMeters * heightToMeters) * 18.5).toFixed(1);
    const max = ((heightToMeters * heightToMeters) * 24.9).toFixed(2);

    return `${min}kg ~ ${max}kg`;
  }, [data]);

  const illustration = useMemo(() => {
    const { gender } = data;

    if (gender === 'f') {
      return femaleAnimation;
    }
    return maleAnimation;
  }, [data]);

  const resetForm = useCallback(() => {
    setFormData({} as FormData);
  },
  []);

  return (
    <S.Container>
      {
        data?.gender && (
          <>
            <header>
              <h3>{ category }</h3>
            </header>
            <div className="container-illustration">
              <Lottie
                options={{
                  animationData: illustration,
                }}
              />
            </div>
            <S.ResultContainer>
              <div>
                <p>Teu índice de massa corporal é de:</p>
                <span>
                  {totalImc}
                  kg/m²
                </span>
              </div>
              <div>
                <p>Peso ideal é entre:</p>
                <span>
                  {idealWeight}
                </span>
              </div>
            </S.ResultContainer>
            <button type="button" onClick={resetForm}>Calcular novamente</button>
          </>
        )
      }

    </S.Container>
  );
};

export default ResultCalculator;

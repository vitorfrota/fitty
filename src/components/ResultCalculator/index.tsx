import React, { useMemo, useCallback } from 'react';

import { useCalculator } from '../../hooks/calculator';

import * as S from './styles';

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

    return `${min}kg - ${max}kg`;
  }, [data]);

  const illustration = useMemo(() => {
    const { gender } = data;

    if (gender === 'f') {
      return 'data:image/png;base64,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';
    }
    return 'https://images.vexels.com/media/users/3/144817/isolated/preview/5da79d3fe627deea78e027a07b69e135-beard-man-illustration-by-vexels.png';
  }, [data]);

  const resetForm = useCallback(() => {
    setFormData({});
  },
  []);

  return (
    <S.Container>
      {
        data.gender && (
          <>
            <header>
              <h3>{ category }</h3>
            </header>
            <div className="container-illustration">
              <img src={illustration} alt="image" />
            </div>
            <S.ResultContainer>
              <div>
                <p>Teu índice de massa corporal é de:</p>
                <span>
                  {totalImc}
                  {' '}
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
            <button onClick={resetForm}>Calcular novamente</button>
          </>
        )
      }

    </S.Container>
  );
};

export default ResultCalculator;

import React, { useMemo, useCallback } from 'react';
import Lottie from 'lottie-react-web';
import { useCalculator } from '../../hooks/calculator';
import { useRoute } from '../../hooks/route';

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
  const { navigateTo } = useRoute();

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

  const animation = useMemo(() => {
    const { gender } = data;

    if (gender === 'f') {
      return femaleAnimation;
    }
    return maleAnimation;
  }, [data]);

  const progressPercent = useMemo(() => {
    const total = (totalImc * 100) / 40;

    return total;
  }, [totalImc]);

  const backgroundProgress = useMemo(() => {
    if (totalImc <= 18.5) {
      return '#2D14CC';
    }
    if (totalImc > 18.5 && totalImc <= 24.9) {
      return '#00CC69';
    }
    if (totalImc > 25) {
      return '#CC2B14';
    }

    return '#f5f5f5';
  }, [totalImc]);

  const resetForm = useCallback(() => {
    setFormData({} as FormData);
    navigateTo('form');
  },
  [setFormData, navigateTo]);

  const handleSaveRegister = useCallback(() => {
    setFormData({} as FormData);

    const listRegister: any[] = JSON.parse(localStorage.getItem('@fitty/data') || '[]');

    const item = {
      weight: data.weight,
      date: new Date(),
    };

    listRegister.push(item);

    localStorage.setItem('@fitty/data', JSON.stringify(listRegister));
  },
  [setFormData, data]);

  return (
    <S.Container>

      <header>
        <h3>{ category }</h3>
      </header>
      <div className="container-illustration">
        <Lottie
          options={{
            animationData: animation,
          }}
        />
      </div>
      <S.Bar progress={progressPercent} bgColor={backgroundProgress}>
        <div className="progress-bar" />
      </S.Bar>
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
        <div className="group-buttons">
          <button type="button" className="btn-outline" onClick={resetForm}>Calcular novamente</button>
          <button type="button" onClick={handleSaveRegister}>Salvar novo peso</button>
        </div>

      </S.ResultContainer>

    </S.Container>
  );
};

export default ResultCalculator;

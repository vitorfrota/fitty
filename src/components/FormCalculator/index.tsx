import React, {
  useState, useCallback, useMemo,
} from 'react';

import { useCalculator } from '../../hooks/calculator';

import * as S from './styles';

const FormCalculator: React.FC = () => {
  const { setFormData } = useCalculator();
  const [weight, setWeight] = useState(20); // peso em kg
  const [height, setHeight] = useState(100); // altura em cm
  const [gender, setGender] = useState<'m'|'f'>('m'); // genero m ou f

  const heightToMeters = useMemo(() => height / 100, [height]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    setFormData({ weight, height, gender });
  }, [gender, height, weight]);

  const handleSetHeight = useCallback((e) => {
    setHeight(e.target.value);
  }, []);

  const handleSetWeight = useCallback((e) => {
    setWeight(e.target.value);
  }, []);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <h2>Calcule seu imc</h2>
        <div>
          <label htmlFor="gender">
            Selecione seu sexo
            <strong>*</strong>
          </label>
          <S.Gender>
            <li
              onClick={() => setGender('m')}
              className={gender === 'm' ? 'active' : ''}
            >
              Masculino
            </li>
            <li
              onClick={() => setGender('f')}
              className={gender === 'f' ? 'active' : ''}
            >
              Feminino
            </li>
          </S.Gender>
        </div>
        <S.Range>
          <label htmlFor="weight">
            <p>
              Qual seu peso?
              <strong>*</strong>
            </p>

            <span>
              {weight}
              <strong> kg</strong>
            </span>
          </label>
          <input
            type="range"
            name="weight"
            onChange={(e) => handleSetWeight(e)}
            min="20"
            max="180"
            value={weight}
          />
        </S.Range>
        <S.Range>
          <label htmlFor="height">
            <p>
              Qual sua altura?
              <strong>*</strong>
            </p>
            <span>
              {heightToMeters}
              <strong> m</strong>
            </span>
          </label>
          <input
            type="range"
            name="height"
            onChange={(e) => handleSetHeight(e)}
            min="100"
            max="230"
            value={height}
          />
        </S.Range>
        <button type="submit">Calcular</button>
      </S.Form>
    </S.Container>

  );
};

export default FormCalculator;

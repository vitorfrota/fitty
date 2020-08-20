import React from 'react';

import * as S from './styles';

const ResultCalculator: React.FC = () => (
  <S.Container>
    <header>
      <h3>Sobrepeso</h3>
    </header>
    <div className="container-illustration">
      <img src="https://images.vexels.com/media/users/3/144817/isolated/preview/5da79d3fe627deea78e027a07b69e135-beard-man-illustration-by-vexels.png" alt="image" />
    </div>
    <S.ResultContainer>
      <div>
        <p>Teu índice de massa corporal é de:</p>
        <span>25kg/m²</span>
      </div>
      <div>
        <p>Peso ideal é de:</p>
        <span>80kg</span>
      </div>
    </S.ResultContainer>
  </S.Container>
);

export default ResultCalculator;

import React from 'react';

import Calculator from '../Calculator';

import * as S from './styles';

const Layout: React.FC = () => (
  <S.Wrapper>
    <header>
      <h1>Fitty</h1>
    </header>
    <S.Container>
      <Calculator />
    </S.Container>
  </S.Wrapper>
);

export default Layout;

import React, { useEffect, useState } from 'react';

import routes from '../../routes';

import { useRoute } from '../../hooks/route';

import * as S from './styles';

const Layout: React.FC = () => {
  const [component, setComponent] = useState<JSX.Element>();
  const { currentRoute } = useRoute();

  useEffect(() => {
    const element = routes.find((route) => route.path === currentRoute);

    setComponent(element?.component);
  }, [currentRoute]);

  return (
    <S.Wrapper>
      <header>
        <h1>Fitty</h1>
      </header>
      <S.Container>
        {
          component
        }
      </S.Container>
    </S.Wrapper>
  );
};

export default Layout;

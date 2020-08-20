import React from 'react';

import GlobalStyle from './styles/globalStyle';

import Layout from './components/Layout';

import AppProvider from './hooks';

const App: React.FC = () => (
  <AppProvider>
    <Layout />
    <GlobalStyle />
  </AppProvider>
);

export default App;

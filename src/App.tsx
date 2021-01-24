import React from 'react';

import ClienteCadastro from './pages/Cliente/Cadastro'
import GlobalStyle from './styles/global'
import AppProvider from './hook'

const App: React.FC = () => (
  <>
    <AppProvider>
        <ClienteCadastro />
        <GlobalStyle />
    </AppProvider>
  </>
);

export default App;

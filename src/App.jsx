import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Form from './components/Form';
import Logo from './components/Logo';
import Lista from './components/Lista';
import Splashscreen from './components/Splashscreen';
import UserProvider from './context/UserContext';

import { BACKGROUND, TEXT_COLOR, LINK_COLOR } from './colors';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
  font-size: 10px;
`;

const GlobalStyle = createGlobalStyle`
    body {
        background: ${BACKGROUND};
        margin:0;
        padding: 0;
        font-family: "Inter", serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
`;

function App() {
  const [lista, setLista] = useState([
    {
      title: 'Viaje al Brasil',
      precio: 100000,
      qtdPersonas: 3,
    },
    {
      title: 'Luz',
      precio: 170000,
      qtdPersonas: 2,
    },
  ]);

  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setTimeout(() => setCargando(false), '2000');
  }, []);

  if (cargando) {
    return <Splashscreen />;
  }

  return (
    <Container>
      <UserProvider>
        <GlobalStyle />
        <Logo />
        <Form lista={lista} setLista={setLista} />
        <Lista lista={lista} jose="Chico mio" />
      </UserProvider>
    </Container>
  );
}

export default App;

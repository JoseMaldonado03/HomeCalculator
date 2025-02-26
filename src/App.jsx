import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import HomePage from './pages/Home';
import Splashscreen from './components/Splashscreen';
import UserProvider from './context/UserContext';
import ItemProvider from './context/ItemContext';

import { BACKGROUND } from './colors';

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
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => setCargando(false), '2000');
  }, []);

  if (cargando) {
    return <Splashscreen />;
  }

  return (
    <UserProvider>
      <ItemProvider>
        <GlobalStyle />
        <HomePage />
      </ItemProvider>
    </UserProvider>
  );
}

export default App;

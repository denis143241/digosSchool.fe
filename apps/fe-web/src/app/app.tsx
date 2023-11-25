import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>Hia!</h1>
    </StyledApp>
  );
}

export default App;

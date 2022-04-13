import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Experiencia } from './screens/Experiencia';
import { Formacao } from './screens/Formacao';
import { Header } from './common-components/Header/Header'
import { Hobbie } from './screens/Hobbies';
import { Home } from './screens/Home';
import { NormalizeStyles } from './shared/NormalizeStyles'
import { NotFound } from './screens/NotFound'
import { Sobre} from './screens/Sobre';
import { Colors } from './shared/DesignTokens';

const Container = styled.div`
	background-color: ${Colors.NEUTRAL_GRAY};
`;

export function App() {
  return (
    <>
      <Container>
        <NormalizeStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/experiencia" exact element={<Experiencia />}></Route>
            <Route path="/formacao" exact element={<Formacao />}></Route>
            <Route path="/hobbies" exact element={<Hobbie />}></Route>
            <Route path="/sobre" exact element={<Sobre />}></Route>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="*" element={<NotFound />}>Oh no, Página não encontrada!</Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}


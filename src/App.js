import Topo from "./components/Topo";
import ListaCards from "./components/ListaCards";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useState } from "react";
import CARDS from "./mock";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <ContainerApp>
      <Topo />
      <ListaCards contador={contador} setContador={setContador} />
      <Footer contador={contador} quantidaDeDeCards={CARDS.length} />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
background-color: #FB6B6B;
width: 375px;
height: 100%;
margin: 0 auto ;
display: flex;
flex-direction: column;
align-items: center;
`;
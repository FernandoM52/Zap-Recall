import Topo from "./components/Topo"
import ListaCards from "./components/ListaCards";
import Footer from "./components/Footer";
import styled from "styled-components";
export default function App() {
  return (
    <ContainerApp>
      <Topo />
      <ListaCards />
      <Footer />
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
`
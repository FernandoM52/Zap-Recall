import Topo from "./components/Topo"
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import styled from "styled-components";
export default function App() {
  return (
    <>
      <ContainerApp>
        <Topo />
        <Cards />
        <Footer />
      </ContainerApp>
    </>
  );
}

const ContainerApp = styled.div`
background-color: #FB6B6B;
width: 375px;
height: 667px;
margin: 0 auto ;

display: flex;
flex-direction: column;
align-items: center;
`
import Topo from "./components/Topo"
import styled from "styled-components";
export default function App() {
  return (
    <>
      <Titulo>
        <Topo></Topo>
      </Titulo>
    </>
  );
}

const Titulo = styled.div`
background-color: black;
width: 375px;
height: 667px;
margin: 0 auto ;

display: flex;
flex-direction: column;
align-items: center;
`
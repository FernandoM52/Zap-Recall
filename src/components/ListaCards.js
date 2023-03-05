import Card from "./Card";
import styled from "styled-components";
import CARDS from "../mock"

export default function ListaCards() {
    return (
        <ContainerCards>
            <Card />
        </ContainerCards>
    );
}

const ContainerCards = styled.div`
display: flex;
flex-direction: column;
`
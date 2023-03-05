import Card from "./Card";
import styled from "styled-components";
import CARDS from "../mock"

export default function ListaCards() {
    return (
        <ContainerCards>
            {CARDS.map((c, i) => (
                <Card
                    key={i}
                    card={c}
                    id={i}
                />
            ))}
        </ContainerCards>
    );
}

const ContainerCards = styled.ul`
display: flex;
flex-direction: column;
`
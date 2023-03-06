import Card from "./Card";
import styled from "styled-components";
import CARDS from "../mock"
import { useState } from "react";

export default function ListaCards() {
    const [virarCard, setVirarCard] = useState(0);

    function girarCard() {
        const proximoCard = virarCard + 1;
        setVirarCard(proximoCard);
    }

    return (
        <ContainerCards>
            {CARDS.map((c, i) => (
                <Card
                    key={i}
                    card={c}
                    id={i}
                    virarCard={virarCard}
                    girarCard={girarCard}
                />
            ))}
        </ContainerCards>
    );
}

const ContainerCards = styled.ul`
display: flex;
flex-direction: column;
padding-bottom: 100px;
`
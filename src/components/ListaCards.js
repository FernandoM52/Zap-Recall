import Card from "./card/Card";
import styled from "styled-components";
import CARDS from "../mock";

export default function ListaCards({ contador, setContador }) {
    return (
        <ContainerCards>
            {CARDS.map((c, i) => (
                <Card
                    key={i}
                    pergunta={c.question}
                    resposta={c.answer}
                    index={i}
                    contador={contador}
                    setContador={setContador}
                />
            ))}
        </ContainerCards>
    );
}

const ContainerCards = styled.ul`
display: flex;
flex-direction: column;
padding-bottom: 100px;
`;
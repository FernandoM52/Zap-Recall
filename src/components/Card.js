import styled from "styled-components";
import { FiPlay } from "react-icons/fi"

export default function Card() {
    return (
        <FlashCard>
            <p>Pergunta 1</p>
            <FiPlay />
        </FlashCard >
    );
}

const FlashCard = styled.div`
background-color: #FFFFFF;
width: 300px;
height: 65px;
margin-top: 51px;
border-radius: 5px;
box-shadow: 0px 4px 5px 0px #00000026;
display: flex;
justify-content: space-between;
align-items: center;

p{
    color: #333333;
    padding-left: 15px;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
}

svg{
    padding-right: 15px;
    font-size: 20px;
}
`
import styled from "styled-components";
import icones from "./icones";
import girar from "../assets/imgs/seta_virar.png";
import { useState } from "react";

export default function Card({ pergunta, resposta, index, contador, setContador }) {

    const [virarCard, setVirarCard] = useState(0);
    const [respondido, setRespondido] = useState(false);
    const [iconeRespondido, setIconeRespondido] = useState(0);
    const naoLembrei = 1;
    const quaseLembrei = 2;
    const lembrei = 3;



    function girarCard() {
        const proximoCard = virarCard + 1;
        if (virarCard === 0 && !respondido) {
            setVirarCard(proximoCard);
        } else if (virarCard === 1 || virarCard === 2) {
            setVirarCard(proximoCard)
        };

    }

    function responder(resposta) {
        setRespondido(true);
        setIconeRespondido(resposta)
        const novoContador = contador + 1;
        setContador(novoContador);
        setVirarCard(0);
    }

    return (
        <>
            {virarCard === 0 &&
                <FlashCard
                    data-test="flashcard"
                    respondido={respondido}
                    iconeRespondido={iconeRespondido}
                    naoLembrei={naoLembrei}
                    quaseLembrei={quaseLembrei}
                    lembrei={lembrei}
                >
                    <p data-test="flashcard-text">Pergunta {index + 1}</p>
                    <img
                        data-test={icones[iconeRespondido].data}
                        src={icones[iconeRespondido].src}
                        alt={icones[iconeRespondido].alt}
                        onClick={() => girarCard()}>
                    </img>
                </FlashCard>
            }
            {
                virarCard === 1 &&
                <CardPergunta data-test="flashcard">
                    <p data-test="flashcard-text">{pergunta}</p>
                    <img
                        data-test="turn-btn"
                        src={girar}
                        alt="Card Pergunta"
                        onClick={() => girarCard()}>
                    </img>
                </CardPergunta>
            }
            {
                virarCard === 2 &&
                <CardResposta data-test="flashcard">
                    <p data-test="flashcard-text">{resposta}</p>
                    <div>
                        <button data-test="no-btn" onClick={() => responder(naoLembrei)}>Não<br></br>lembrei</button>
                        <button data-test="partial-btn" onClick={() => responder(quaseLembrei)}>Quase não lembrei</button>
                        <button data-test="zap-btn" onClick={() => responder(lembrei)}>Zap!</button>
                    </div>
                </CardResposta>
            }
        </>
    );
}

const FlashCard = styled.li`
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
padding-left: 15px;
font-family: 'Recursive', sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: ${({ iconeRespondido, naoLembrei, quaseLembrei, lembrei }) =>
        iconeRespondido === naoLembrei
            ? "#FF3030"
            : iconeRespondido === quaseLembrei
                ? "#FF922E"
                : iconeRespondido === lembrei
                    ? "#2FBE34"
                    : "#333333"};
text-decoration: ${({ respondido }) => respondido ? "line-through" : "none"};
}

img{
padding-right: 15px;
width: 20px;
cursor : pointer
}
`
const CardPergunta = styled(FlashCard)`
background-color: #FFFFD4;
position: relative;
min-height: 131px;
align-items: flex-start;

p{
color: #333333;
padding-top: 18px;
padding-left: 15px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 21px;
}
img{
    width: 30px;
    position: absolute;
    right: 0%;
    bottom: 6px;
}
`
const CardResposta = styled.li`
background-color: #FFFFD4;
width: 300px;
min-height: 131px;
margin-top: 51px;
padding-bottom: 10px;
border-radius: 5px;
box-shadow: 0px 4px 5px 0px #00000026;
display: flex;
flex-direction: column;

p{
color: #333333;
padding-top: 18px;
padding-left: 15px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 21px;
}

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

button{
    width: 85px;
    height: 37px;
    margin-top: 22px;
    border: none;
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-decoration: #FFFFFF;
    color: #FFFFFF;
    cursor: pointer;
}

button:nth-child(1){
    margin-left: 17px;
    background-color: #FF3030;
}

button:nth-child(2){
    background-color: #FF922E;
}

button:nth-child(3){
    margin-right: 17px;
    background-color: #2FBE34;
}
`
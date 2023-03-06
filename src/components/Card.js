import styled from "styled-components";
import play from "../assets/imgs/seta_play.png";
import girar from "../assets/imgs/seta_virar.png";

export default function Card({ card, id, virarCard, girarCard }) {
    const { question, answer, } = card;
    return (
        <>
            {virarCard === 0 && <FlashCard>
                <p>Pergunta {id + 1}</p>
                <img src={play} alt="Card Padrão" onClick={() => girarCard(card)}></img></FlashCard>
            }
            {virarCard === 1 &&
                <CardPergunta>
                    <p>{question}</p>
                    <img src={girar} alt="Card Pergunta" onClick={() => girarCard(card)}></img>
                </CardPergunta>
            }
            {virarCard === 2 &&
                <CardResposta>
                    <p>{answer}</p>
                    <div>
                        <button>Não lembrei</button>
                        <button>Quase não lembrei</button>
                        <button>Zap!</button>
                    </div>
                </CardResposta>}
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
color: #333333;
padding-left: 15px;
font-family: 'Recursive', sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 19px;
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
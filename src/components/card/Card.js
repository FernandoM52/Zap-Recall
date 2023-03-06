import icones from "../icones";
import girar from "../../assets/imgs/seta_virar.png";
import { useState } from "react";
import { FlashCard, CardPergunta, CardResposta } from "./cardStyle";

export default function Card({ pergunta, resposta, index, contador, setContador }) {
    const [virarCard, setVirarCard] = useState(0);
    const [respondido, setRespondido] = useState(false);
    const [iconeRespondido, setIconeRespondido] = useState(0);
    const naoLembrei = 1;
    const quaseLembrei = 2;
    const lembrei = 3;
    const cardPergunta = 1;
    const cardResposta = 2;

    function girarCard() {
        const proximoCard = virarCard + 1;
        if ((virarCard === 0 && !respondido) || (virarCard === cardPergunta || virarCard === cardResposta)) {
            setVirarCard(proximoCard);
        }
    }

    function responder(resposta) {
        setRespondido(true);
        setIconeRespondido(resposta);
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
                virarCard === cardPergunta &&
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
                virarCard === cardResposta &&
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
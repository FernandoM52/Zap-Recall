import styled from "styled-components";

export const FlashCard = styled.li`
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
cursor : ${({ respondido }) => respondido ? "default" : "pointer"};
}
`;

export const CardPergunta = styled(FlashCard)`
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
`;

export const CardResposta = styled.li`
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
`;
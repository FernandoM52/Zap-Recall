import styled from "styled-components";

export default function Footer() {
    return (
        <Rodape>
            <p>0/4 CONCLUÍDOS</p>
        </Rodape>
    );

}

const Rodape = styled.footer`
position: fixed;
z-index: 2;
bottom: 0;
background-color: #ffffff;
width: 375px;
height: 70px;
display: flex;
align-items: center;
justify-content: center;

p{
    color: #333333;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
}
`
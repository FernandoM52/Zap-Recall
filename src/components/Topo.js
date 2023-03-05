import styled from "styled-components";
import logo from "../assets/imgs/logo.png";
export default function Topo() {
    return (
        <Logo>
            <img src={logo} alt="Zap Recall"></img>
            <>ZapRecall</>
        </Logo>
    );
}

const Logo = styled.h1`
color: #FFFFFF;
width: 255px;
font-family: 'Righteous', cursive;
font-weight: 400;
font-size: 36px;
line-height: 44px;
padding-top: 42px;
display: flex;
img{
    width: 52px;
    height: 60px;
    margin-right: 20px;
}
`
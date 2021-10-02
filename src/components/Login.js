import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container> 
                <Content>
                        <CTImage src="/images/cta-logo-one.svg"></CTImage>
                        <CTButton>GET ALL THERE</CTButton>
                        <Description>
                                Get premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.<br/>
                                As of 02/10/2021. the price of Disney+ and the Disney Bundle will increase by $1. 
                        </Description> 
                        <CTImage2 src="/images/cta-logo-two.png"></CTImage2>
                </Content>
        </Container>
    )
}

export default Login


const Container = styled.div`

        min-height:calc(100vh - 70px);
        background-image:url("/images/login-background.jpg");
        background-size:cover;
        background-position:top;
        display:flex;
        align-items:center;
        justify-content:center;

`;

const Content = styled.div`
        display:flex;
        padding:80px 40px;
        max-width:65rem;
        width:40%;  
        align-items:top;
        flex-direction:column;
        margin-top:-80px;
      
        `;


const CTImage =styled.img``;


const CTButton = styled.a`

    margin-top:20px;
    background-color:#0063e5;
    display:flex;
    justify-content:center;
    color:white;
    font-weight:bold;
    padding:17px 0 ;
    font-size:18px;
    border-radius:4px;
    border:none;
    transition: all .2s;
    letter-spacing:1.5px;
    &:hover{
        background:#0483ee;
    }

`;

const CTImage2 =styled.img`

margin-top:20px;
`;

const Description = styled.p`
    color:white;
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`;
import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers;


const Container = styled.div`
        margin-top: 3rem;
        color:white;
        display:grid;
        grid-template-columns:repeat(5, minmax(0,1fr));
        grid-gap:20px;
        padding:0 5rem;
`;


const Wrap =styled.div`


    border : 3px solid rgba(249,249,249,0.1);
    border-radius:15px;
    box-shadow: 0 2rem .9rem black;
    cursor:pointer;
    transition:all .2s;

    &:hover
    {
        transform: scale(1.05);
        border:3px solid white;
    }
    img
    {
        width:100%;
     
        object-fit:cover;
    }
`;
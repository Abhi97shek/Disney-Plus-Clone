import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
function Home() {
    return (
            <Container>
                <ImgSlider/>
                <Viewers />
                <Movies />
            </Container>
    )
}

export default Home


const Container = styled.main`

    min-height: calc(100vh - 70px);
    background-image: url('images/home-background.png');
    background-size:cover;
    background-position: center;
    background-repeat:no-repeat;
    background-attachment: fixed;

`;
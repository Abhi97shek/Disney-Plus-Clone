import React from 'react'
import styled from 'styled-components';
function Details() {
    return (
            <Container>
                    <ImageTitle>
                            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="logo-movie" />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png"/>
                             <span>Play</span>   
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" />
                            <span>Trailer</span>
                            
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" />
                        </GroupWatchButton>
                    
                    </Controls>
                    <SubTitle>
                            2018 . 7m . Family, Fantasy, Kids, Animation
                    </SubTitle>
                    <Description>
                    He film is about an aging and lonely Chinese-Canadian mother, suffering from empty nest syndrome,<br/> who receives an unexpected second chance at motherhood when she makes a steamed bun (baozi) that comes to life.<br/> The film won the Oscar for the Best Animated Short Film at the 91st Academy Awards

                    </Description>

            </Container>
    )
}

export default Details;



const Container = styled.section`
        min-height: 92.5vh;
        background-image:url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg");
        
        background-size:cover;
        background-attachment:fixed;
        background-position:right bottom;
       
`;

const ImageTitle = styled.div`

            padding-top:3rem;
            height:30vh;
            margin-left:6rem;
            width:25vw;
            img
            {
                
                height:100%;
                object-fit:contain;
              
            }
`;

const Controls = styled.div`

            display:flex;
            margin-top:2rem;
            padding-left:6rem;
            
`;

const PlayButton =styled.button`
                display:flex;
                align-items:center;
                border-radius:4px;
                font-size:15px;
                background-color:rgb(249,249,249);
                border:none;
                padding:0 20px 0 10px ;
                margin-right:1rem;
                letter-spacing:1.8px;
                text-transform:uppercase;
                cursor:pointer;

                &:hover
                {
                    background:rgb(198,198,198);
                }

            
`;

const TrailerButton =styled(PlayButton)`

            background-color:rgba(0,0,0,.3);
            border:1px solid rgb(249,249,249);
            color:rgb(249,249,249);
`;

const AddButton =styled.button`
                width:3rem;
                height:3rem;
                border-radius:50%;
                border:2px solid white;
                background-color:rgba(0,0,0,.6);
                cursor:pointer;
                margin-right:1rem;
                span
                {
                    color:white;
                    font-size:30px;
                }

                &:hover
                {
                    background:rgb(198,198,198);
                }

`;
const GroupWatchButton =styled(AddButton)`
                
background-color:rgba(0,0,0,.9);
                display:flex;
                justify-content:center;
                align-items:center;
`;

const SubTitle = styled.div`
margin-top:3rem;
               margin-left:6rem;
               color:white;
               color:rgb(249,249,249);
               font-size:15px;
               min-height:20px;
               
`;

const Description = styled.div`
        margin-top:1rem;
        margin-left:6rem;
        color:white;
        line-height:1.4;
        font-size:20px;
        color:rgba(249,249,249);
`;
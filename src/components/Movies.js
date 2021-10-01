import React from 'react'
import styled from 'styled-components';
function Movies() {
    return (
        <Container>
                <h4>Recommend For You</h4>
                    <Content>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                        <Wrap>
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt="sim-movie" />
                        </Wrap>
                    </Content>
        </Container>
    )
}

export default Movies;

 const Container = styled.div`
    color:white;
    margin-top:4rem;
    padding: 0 5rem;
 
 `;

 const Content =styled.div`


        display:grid;
        grid-template-columns:repeat(4, minmax(0,1fr));
        grid-gap:20px;
 
 
 `;

 const Wrap = styled.div`
        border-radius :10px;
        overflow:hidden;
        border:3px solid rgba(249,249,249,0.1);
        box-shadow: 0 2rem .9rem black;
        transition:all .2s;
        cursor:pointer;
        // &:not(:last-child)
        // {
        //     margin-right:2rem;
        // }
 
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
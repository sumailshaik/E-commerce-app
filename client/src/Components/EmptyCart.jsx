import React from 'react'
import styled from 'styled-components'
import {
    Link
  } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-color: transparent;
    box-shadow:0 4px 16px 0 rgba(0,0,0,.2);
    display: flex;
    justify-content: center;
`;
const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 25px;
    height: 80%;
    width: 98%;
    background-color:white;
`;
const Title = styled.h3`
    margin-top: 20px;
    margin-left: 20px;

`;
const Main = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;
const Image = styled.img`
    height: 200px;
    width: 200px;
    object-fit: contain;
`;
const EmptyTitle = styled.p``;
const AddTitle = styled.p`
    margin: 20px;
    font-size: 12px;
`;
const ButtonWrapper = styled.div``;
const Button = styled.button`
    border: none;
    width:220px;
    height: 40px;
    background-color: #2874f0;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    color:white;
    font-weight: 400;
    padding: 12px 72px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
`;

const EmptyCart = () => {
    return (
        <Container>
            <Wrapper>
                <Title>My Cart</Title>
                <Main>
                    <Image src="data:image/png;base64,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" alt=""/>
                    <EmptyTitle>Your cart is empty!</EmptyTitle>
                    <AddTitle>Add items to it now.</AddTitle>
                    <ButtonWrapper>
                        <Link to="/">
                            <Button>Shop now</Button>
                        </Link>
                    </ButtonWrapper>
                    
                </Main>
            </Wrapper>
        </Container>
    )
}

export default EmptyCart

import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { closeModal, gotoSignup, login } from '../context/Actions';
import { DataLayer } from '../context/Context';


const Container = styled.div`
    height: 530px;
    width: 680px;
    background-color:white;
    border-radius: 5px;
    display:flex;
`;

const Left = styled.div`
    width: 40%;
    height: 100%;
    background-color: #2874f0;
    color: white; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
`;

const Wrapper = styled.div`
`;

const Title = styled.h3`
    margin-left: 30px;
    font-size: 30px;
`;

const Desc = styled.p`
    margin-top: 20px;
    margin-left: 30px;
    padding-right: 60px;
    font-size: 20px;
    font-weight: 300;
`;

const Image = styled.img`
    height: 150px;
    width: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    width: 60%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Form = styled.form`
    margin: 10px 30px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;

`;

const Input = styled.input`
    padding: 5px;
`;

const Terms = styled.p`
    color: #878787;
    font-size: 12px;
    font-weight: 400;
`;

const Span = styled.span`
    color: #2874f0;
    

`;

const Button = styled.button`
    height: 50px;
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border: none;
    color: #fff; 
    font-size: 15px;
    font-weight: 500;
`;

const Bottom = styled.p`
    color: #2874f0;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
`;

const Login = () => {
    const {dispatch} = useContext(DataLayer)
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState()

    const logicApiCall = async() => {
        try{
            const userCredentials = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }

            const res = await axios.post("/auth/login", userCredentials)
            dispatch(login(res.data._id))
            
            dispatch(closeModal())
        }catch(err){
            setError("user not logged in...")
        }
    } 

    const handleLoginButtonPressed = (e) => {
        e.preventDefault()
        if(!emailRef.current.value){
            setError("Enter your email")
        }else if (!passwordRef.current.value){
            setError("Enter your password")
        }else{
            logicApiCall();   
        }
    }

    return (
        <Container>
            <Left>
                <Wrapper>
                    <Title>Login</Title>
                    <Desc>Get access to your Orders, Wishlist and Recommendations</Desc>
                </Wrapper>
                <Image src="https://cdn.grabon.in/gograbon/giftbycard/images/category/1532443115748/flipkart-gift-card.jpg"/>
            </Left>
            <Right>
                <Form>
                    <Input type="email" placeholder="Enter Email" ref = {emailRef}/>
                    <Input type="password" placeholder="Enter Password" ref={passwordRef} />
                    <Terms>By continuing, you agree to Flipkart's <Span>Terms of Use</Span> and <Span>Privacy Policy.</Span></Terms>
                    <Button onClick={handleLoginButtonPressed}>Login</Button>
                </Form>
                <Bottom onClick = {()=> dispatch(gotoSignup())}>New to Flipkart? Create an account</Bottom>
                <p>{error}</p>
                
            </Right>
        </Container>
    )
}

export default Login;

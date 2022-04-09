import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import styled from 'styled-components';
import { useContext } from 'react';
import { DataLayer } from "../context/Context"
import {openModal, gotoLogin, logout} from "../context/Actions"
import {
    Link
  } from "react-router-dom";
import { Badge } from '@material-ui/core';
import axios from "axios";
import { useState } from 'react';

const Container = styled.div`
    background-color: #2874f0;
    display:flex;
    height: 3.5rem;
    width:100vw;
    justify-content:center;
    position: sticky;
    top:0px;
    z-index:2;
`;

const Wrapper = styled.div`
    height:100%;
    width:75%;
    display:flex;
    @media (max-width: 480px) {
        width:90%;
      }
`;

const Left = styled.div`
    display: flex;
    align-items:center;
    margin-right:50px;
    @media (max-width: 480px) {
        margin-right:5px;
      }
`;
const Logo = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content: center;
    margin-right: 10px;
`;
const LogoImage = styled.img`
    height:20px;
    @media (max-width: 480px) {
        height:10px;
    }
`;
const Tag = styled.div`
   position: absolute;
   top: 10px;
   left:5px;
   @media (max-width: 480px) {
    top: -1px;
    left:6px;
   }
}
   
`;
const Item = styled.span`
    font-size:10px;
    font-style: italic;
    color: white;
    @media (max-width: 480px) {
        font-size:.3rem;
       }
`;

const Plus = styled.img`
    height: 10px;
    @media (max-width: 480px) {
        height: 5px;
       }
`;
const Search = styled.div`
    flex:1;
    position: relative;
`;

const Input = styled.input`
    width:30rem;
    padding: 7px;
    @media (max-width: 480px) {
        width:8rem;
        font-size: .4rem;
       }
`;

const Right = styled.div`
    display: flex;
    width:20rem;
    @media (max-width: 480px) {
        width:8rem;
        font-size: .4rem;
        align-items:center;
       }
`;
const Option = styled.div`
    display:flex;
    align-items:center;
    margin-right:40px;
    width: 6rem;
    @media (max-width: 480px) {
        width:32px;
        height:18px;
        font-size: .4rem;
        margin-right:10px;
       }

`;

const SubOptions = styled.div`
    display: none;
    
`;

const TextOption = styled.div`
    display:flex;
    align-items:center;
    margin-right:40px;
    width: 6rem;
    position: relative;
    &:hover ${SubOptions} {
        display: flex;
        flex-direction: column;
        position: absolute;
        //border: 2px solid red;
        background-color: white;
        width: 12rem;
        top:55px;
        left: -70px;
        box-shadow:0 4px 16px 0 rgba(0,0,0,.2);
        border-radius: 0px 0px 5px 5px;
      }
    @media (max-width: 480px) {
        width:32px;
        height:18px;
        font-size: .4rem;
        margin-right:15px;
       }
`;

const Shape = styled.div`
      position:relative;
      width:100%;
      height:100%;
      background-color:blue;
`;

const Triangle = styled.div`
      top: -9px;
      left: 85px;
      position: absolute;
      width: 20px;
      height: 10px;
      background-color:white;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      
`;

const SubItem = styled.div`
    display:flex;
    align-item:center;
    justify-content:center;
    height: 30px;
    cursor: pointer;
    background-color: white;
    border: none;
    &:hover{
        background-color: #F8F8F8;
    }
`



const LoginButton = styled.button`
    background-color:white;
    border-radius:0px;
    border: none;
    height: 28px;
    width: 120px;
    color: #2874f0;
    font-weight:500;
    font-size: 15px;
    cursor: pointer;
    @media (max-width: 480px) {
        width:32px;
        height:18px;
        font-size: .4rem;
       }
`;

const IconStyle = styled.div`
    color: #2874f0;
    font-size:1.7rem;
    cursor: pointer;
    position: absolute;
    top:0.4rem;
    right: 0px;
    @media (max-width: 480px) {
        top:0.1rem;
        font-size: .4rem;
       }
`  


const OptionButton = styled.button`
    background-color: #2874f0;
    border:none;
    color:white;
    font-size: 15px;
    cursor: pointer;
    @media (max-width: 480px) {
        width:32px;
        height:18px;
        font-size: .4rem;
       }
`; 

const IconShape = styled.div`
font-size: 20px !important;
       height:20px;
       width:20px;
`;


function Header() {
    const {cart, user, dispatch} = useContext(DataLayer)

    

    return (
        <Container>

            <Wrapper>
 
                <Left>
                    
                    <Link to="/">
                        <Logo>
                            <LogoImage  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" />
                            <Tag>
                                <Item>Explore</Item>
                                <Item>Plus
                                    <Plus src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/>
                                </Item>
                                
                            </Tag>
                        </Logo>
                    </Link>
                    

                    <Search>
                        <Input placeholder="Search for products, brands and more" type="text"/>
                        <IconStyle><SearchOutlinedIcon /></IconStyle>
                        
                    </Search>
                    
                </Left>

                <Right>
                     
                        {user=== null 
                        ? (<Option><LoginButton onClick = {()=> {
                                dispatch(openModal())
                                dispatch(gotoLogin())
                            }}>
                            Login
                            </LoginButton></Option>) 
                        : (<TextOption>
                                <OptionButton >Profile!</OptionButton>
                                <ExpandMoreOutlinedIcon style={{ color: "white" }} />
                                <SubOptions>
                                    <Shape>
                                        <Triangle></Triangle>
                                        <SubItem>Profile</SubItem>
                                        <SubItem onClick={()=>dispatch(logout())}>Logout</SubItem>
                                    </Shape>                        
                                </SubOptions>
                            </TextOption>)}
                   

                    <TextOption>
                          
                        <OptionButton >More</OptionButton>
                        <IconShape>
                        <ExpandMoreOutlinedIcon style={{ color: "white" }} />
                        </IconShape>
                        
                        <SubOptions>
                            <Shape>
                                <Triangle></Triangle>
                                <SubItem>My Orders</SubItem>
                                <SubItem>Download App</SubItem>
                            </Shape>                        
                        </SubOptions>
                        
                    </TextOption>
                    
                    
                    <Option>
                    <IconShape>
                        <Badge badgeContent={cart.length} color="secondary">
                            <ShoppingCartRoundedIcon style={{ color: "white" }} />
                        </Badge>
                    </IconShape>
                        
                        <Link to="/cart">
                            <OptionButton >Cart</OptionButton>
                        </Link>
                    </Option>
                    
                </Right>

            </Wrapper>

        </Container>
    )
}

export default Header

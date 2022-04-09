import styled from "styled-components";
import { useContext } from "react";
import { DataLayer } from "../context/Context";
import NumberFormat from 'react-number-format';
import { dereaseQuantity, increaseQuantity, removeFromCart } from "../context/Actions";


const Container = styled.div`
    padding: 20px
`;
const Wrapper = styled.div`
    display:flex;
    border-bottom: 1px solid #f0f0f0;;
`;
const Left = styled.div`
    margin-right: 30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`;
const Image = styled.img`
    height: 100px;
    object-fit: cover;
`;
const Options = styled.div`
    margin: 20px 0px;
    display:flex;
    align-items: center;
`;
const Option = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    border: 1px solid #c2c2c2;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 2px;
    cursor:pointer;
`;

const Rect = styled.div`
    width: 40px;
    height: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 2px;
    margin: 0px 5px;
    border: 1px solid #c2c2c2;
`;

const Count = styled.p``;

const Right = styled.div``;
const Title = styled.p``;
const Desc = styled.p`
    color: #878787;
    font-size: 14px;
`;
const Section = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    display:flex;
    align-items: center;
`;
const Seller = styled.p`
    margin-right: 10px;
    color: #878787;
    font-size: 14px;
`;
const AssuredImg = styled.img`
    height: 20px;
`;
const Price = styled.div`
    display:flex;
    align-items: center;
`;
const Real = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #212121;
    margin-right: 8px;
`;
const Discount = styled.p`
    color: #878787;
    font-size: 14px;
    margin-right: 8px;
`;

const DiscountPercentage = styled.p`
    color: #388e3c;
    font-size: 14px;
    font-weight: 500;
`;
const RemoveBtn = styled.div`
    margin:15px 0px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`;


const CartItem = ({item}) => {

    const {dispatch} = useContext(DataLayer)

    const addItem = () => {
        item.quantity = item.quantity + 1
        dispatch(increaseQuantity(item, item._id))
    }

    const removeItem = () => {
        if(item.quantity === 1){
            dispatch(removeFromCart(item._id))
        }else{
            item.quantity = item.quantity - 1
            dispatch(dereaseQuantity(item, item._id))
        }
    }

    const getDiscount = () => {
        return Math.round(item.price + (item.price * (item.discount/100)))
    }



    return (
        <Container>
            <Wrapper>
                <Left>
                    <Image src={item.image}/>
                    <Options>
                        <Option>
                            <Count onClick={removeItem} >-</Count>
                        </Option>
                        <Rect>
                            <Count >{item.quantity}</Count>
                        </Rect>
                        <Option>
                            <Count onClick={addItem}>+</Count>
                        </Option>
                </Options>
                </Left>
                <Right>
                    <Title>{item.name}</Title>
                    <Desc>{item.desc}</Desc>
                    <Section>
                        <Seller>{item.seller}</Seller>
                        {item.isAssured &&
                        <AssuredImg src="https://www.adgully.com/img/800/68264_fl.png.jpg"/>}
                    </Section>
                    
                    <Price>
                        <Real>
                            <NumberFormat value={item.price * item.quantity} displayType={'text'} thousandSeparator={true} prefix={'₹'} />                           
                        </Real>
                        <Discount>
                            <del>
                            <NumberFormat value={getDiscount()*item.quantity} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                            
                            </del>
                        </Discount>
                        <DiscountPercentage>{item.discount}% Off</DiscountPercentage>
                    </Price>
                    <RemoveBtn onClick={()=>dispatch(removeFromCart(item._id))}>REMOVE</RemoveBtn>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default CartItem

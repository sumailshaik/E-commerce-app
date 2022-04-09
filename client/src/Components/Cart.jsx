import { useContext } from "react";
import styled from "styled-components"
import { DataLayer } from "../context/Context";
import NumberFormat from 'react-number-format';
import CartItem from "./CartItem";
import axios from "axios";
import { clearCart } from "../context/Actions";
import EmptyCart from "./EmptyCart";

const Container = styled.div`
    display:flex;
    width: 100%;
    backgound-color: transparent;
`;

const Left = styled.div`
    flex: 2;
    display:flex;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px; 
    background-color:white;
    flex-direction:column;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
`;

const ItemList = styled.div``;

const Title = styled.div`
    border-bottom: 1px solid #f0f0f0;; 
    padding: 20px;
`;

const PlaceOrder = styled.div`

    display:flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    height: 50px;
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border: none;
    color: #fff; 
    font-size: 15px;
    font-weight: 500;
    padding: 0px 70px;
    margin-bottom: 20px;
    margin-right: 20px;
    cursor: pointer;
`;

const Right = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px; 
    flex: 1;
    display:flex;
    flex-direction: column;
    height: 310px;
    background-color:white;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
`
const Top = styled.h4`
    padding: 15px 20px;
    border-bottom: 1px solid #f0f0f0;
    color: #878787;
`;
const Bottom = styled.div`
    padding: 0 20px;
`;
const Option = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;
const Tag = styled.p``;

const Price = styled.p``;

const Green = styled.span`
    color: #388e3c;
`;

const Amount = styled.div`
    font-weight: 500;
    font-size: 20px;
`;

const Hr = styled.hr`
    border: 1px dashed #f0f0f0;
`;

const Saved = styled.p`
    padding-top: 20px;
    font-weight: 500;
`;

const Cart = () => {

    const {cart,user,dispatch} = useContext(DataLayer)

    const getTotalSum = (total, item) => {
        return Math.round(total + ((item.price + (item.price * (item.discount/100))) * item.quantity))
    }

    const getSum = (total, item) => {
        return Math.round(total + (item.price * item.quantity))
    }

    const getTotalDiscount = (total, item) => {
        return Math.round(total + ((item.price * (item.discount/100)) * item.quantity))
    }

    const OrderApiCall  = async (products) => {
        const newOrder = {
            userId : user,
            products : products,
            Total: cart.reduce(getSum,0),
            address: "testing address"
        }

        //console.log(newOrder)
        try{
            const res = await axios.post('/orders/', newOrder, {headers:{token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQzNTEzZjU1MWE0MWZiNTFiNmFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDAxNTM2OCwiZXhwIjoxNjQwNDQ3MzY4fQ.5w-nvMAHnrqSRb-X8xwK4LKTetnJPfEQzoGzEtWzm6M"}})
            console.log(res.data)
            dispatch(clearCart())
        }catch(err){
            console.log(err)
        }
    }

    const createOrder = () => {
        console.log("order created!")
        let product;
        let products = [];
        cart.map((item)=> {
            product = {
                productId: item._id,
                quantity: item.quantity
            }
            products = [...products, product]
        })
        //console.log(products)
        OrderApiCall(products)

    }

    

    return ( <>
        {!cart.length?<EmptyCart/>:
        <Container>
            <Left>
                <Title><strong>My Cart ({cart.length})</strong></Title>
                <ItemList>
                    {console.log("all cart items are :", cart)}
                    {cart.map((item)=><CartItem item={item}/>)}
                </ItemList>
                <PlaceOrder>
                    <Button onClick={createOrder}>PLACE ORDER</Button>
                </PlaceOrder>
                
            </Left>
            <Right>
                <Top>PRICE DETAILS</Top>
                <Bottom>
                    <Option>
                        <Tag>Price ({cart.length} items)</Tag>
                        <Price>
                        <NumberFormat value={cart.reduce(getTotalSum,0)} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                        </Price>
                    </Option>
                    <Option>
                        <Tag>Discount</Tag>
                        <Price><Green>− <NumberFormat value={cart.reduce(getTotalDiscount,0)} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></Green></Price>
                    </Option>
                    <Option>
                        <Tag>Delivery Charges</Tag>
                        <Price><Green>FREE</Green></Price>
                    </Option>
                    <Hr/>
                    <Amount>
                        <Option>
                            <Tag>Total Amount</Tag>
                            <Price><NumberFormat value={cart.reduce(getSum,0)} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></Price>
                        </Option>
                    </Amount>
                    <Hr/>
                    <Saved><Green>You will save <NumberFormat value={cart.reduce(getTotalDiscount,0)} displayType={'text'} thousandSeparator={true} prefix={'₹'} /> on this order</Green></Saved>
                </Bottom>
            </Right>
        </Container>}
        </>
    )
}

export default Cart

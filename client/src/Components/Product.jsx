import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 300px;
    width:200px;
    margin: 20px 0px;
    background-color:white;
    cursor: pointer;
    &:hover{
        transition: transform .2s ease-in-out; 
        transform: scale(1.05);
    }
`;

const Top = styled.div``;

const Image = styled.img`
    height:200px;
    width: 200px;
    object-fit:contain;
`;
const Bottom = styled.div`
    margin-top: 10px;
    padding-left: 10px;
`;
const Title = styled.h5`
    color: gray;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Middle = styled.div`
    display:flex;
    align-items: center;
`;
const ShortDesc = styled.p`
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`;
const AssuredImg = styled.img`
    height:15px;
`;
const PriceSection = styled.div`
    display:flex;
    align-items: center;
`;
const Price = styled.p`
    padding-right:10px;
`;
const OldPrice = styled.p`
    padding-right:10px;
    color: gray;
`;
const Percentage = styled.p``;

const Product = ({product}) => {

    const getPrice = () => {
        return Math.round(product.price - (product.price * (product.discount/100)))
    }

    return (
        <Link to = {`/product/${product._id}`} style = {{textDecoration:"none"}}>
            <Container>
                <Top><Image src={product.image} alt=""/></Top>
                
                <Bottom>
                    <Title>{product.name}</Title>
                    <Middle>
                        <ShortDesc>{product.desc}</ShortDesc>
                        <AssuredImg src="https://www.adgully.com/img/800/68264_fl.png.jpg"/>
                    </Middle>
                    <PriceSection>
                        <Price><strong>₹ {getPrice()}</strong></Price>
                        <OldPrice><del>₹ {product.price}</del></OldPrice>
                        <Percentage>{product.discount}%off</Percentage>
                    </PriceSection>
                </Bottom>
            </Container>
        </Link>
    )
}

export default Product

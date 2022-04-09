import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin:20px;
    height: 300px;
    width: 200px;
`;

const Image = styled.img`
    height: 200px;
    width: 200px;
    cursor: pointer;
    object-fit:contain;
    transition: transform 100ms ease-in;
    &:hover{
        transform: scale(1.07);
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Title = styled.div`
    width: 100%;
    font-weight: 599;
    padding-top: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    text-overflow : ellipsis;
`;

const Offer = styled.p`
    color:green;
    font-weight: 409;
    padding-top:6px;
`;

const SubTitle = styled.p`
    width: 100%;
    padding: 6px 0;
    color:gray;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    text-overflow : ellipsis;
`;

function RowProduct({product}) {
     
    return (
        <Link to={`/product/${product._id}`} style={{textDecoration: "none"}}>
            <Container>
                <Image src={product.image} alt=""/>
                <Info>
                    <Title>{product.name}</Title>
                    <Offer>Min {product.discount}% Off</Offer>
                    <SubTitle>{product.desc}!</SubTitle>
                </Info>
            </Container>
        </Link>
    )
}

export default RowProduct;

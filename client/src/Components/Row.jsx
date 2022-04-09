import RowProduct from "./RowProduct";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import styled from 'styled-components';
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Container = styled.div`
    background-color: white;
    box-shadow:0 4px 16px 0 rgba(0,0,0,.2);
    width: 97%;
    flex:1;
    margin: 11px 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.2);
    padding: 11px;
`;

const TopBtn = styled.button`
    background: #2874f0;
    color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    border: none;
    padding: 11px 18px;
`;

const Bottom = styled.div`
    position:relative;
`;

const ProductsSection = styled.div`
    display:flex;
`;

const LeftBtn = styled.button`
    position: absolute;
    left: 0px;
    top: 79px;
    background-color: white;
    border: 1px white solid;
    border-radius: 0px 6px 6px 0px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .11);
    height: 104px;
    width:47px
`;

const RightBtn = styled.button`
    position: absolute;
    right: 0px;
    top: 79px;
    background-color: white;
    border: 1px white solid;
    border-radius: 6px 0px 0px 6px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .11);
    height: 104px;
    width:47px
`;

function Row({title}) {
    const slideNumber = useRef(0);
    const [rightButtonHide, setRightButtonHide] = useState(true);
    const [leftButtonHide, setLeftButtonHide] = useState(false);
    const [products, setProducts] = useState([])
    const productsRef = useRef()

    useEffect(()=>{
        const getProducts = async () => {
            const res = await axios.get("/products/random")
            setProducts(res.data)

        }
        getProducts()
        
    },[title])

    const handleRightClick = () => {
        
        if(slideNumber.current==0){
            slideNumber.current = slideNumber.current+1;
            productsRef.current.style.transition = 'transform .35s ease-in-out'
            productsRef.current.style.transform = `translateX(${-1200*slideNumber.current}px)`
            setRightButtonHide(false)
            setLeftButtonHide(true)
        }
        console.log(slideNumber)
    }

    const handleLeftClick = () => {
        
        if(slideNumber.current==1){
            slideNumber.current = slideNumber.current-1;
            productsRef.current.style.transition = 'transform .35s ease-in-out'
            productsRef.current.style.transform = `translateX(${1200*slideNumber.current}px)`
            setRightButtonHide(true)
            setLeftButtonHide(false)
        }
        console.log(slideNumber)
    }
    
    return (
        <Container>
            <Top>
                <h2>{title}</h2>
                <TopBtn>VIEW ALL</TopBtn>
            </Top>
             
            <Bottom>
                
                <ProductsSection ref={productsRef}>

                    {products.map((product)=>(<RowProduct product={product} />))}
                    
                </ProductsSection>
                {leftButtonHide && <LeftBtn onClick={handleLeftClick}><ArrowBackIosOutlinedIcon/></LeftBtn>}
                {rightButtonHide && <RightBtn onClick={handleRightClick}><ArrowForwardIosOutlinedIcon/></RightBtn>}
                
            </Bottom>
        </Container>
    )
}

export default Row

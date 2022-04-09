import { useEffect, useState } from "react";
import styled from "styled-components"
import Product from "../Components/Product";
import Axios from "axios"
import { useParams } from 'react-router-dom'

const Container = styled.div`
    display:flex;
    
`;

const Wrapper = styled.div`
    display:flex;
    flex: 4;
    flex-wrap: wrap;
    justify-content : space-around;
`;

const Adver = styled.div`
    flex:1;
    height: 500px;
    margin: 20px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit:cover;
`;

const CategoryProducts = () => {
    
    const { category } = useParams()
    const [products, setProducts]= useState([])

    useEffect(()=>{
        const getCategoryProducts = async()=> {

            let URL;

            if (category === 'Top Offers'){
                URL = `/products/random`
            }else{
                URL = `/products?category=${category}`
            }
            
            const res = await Axios.get(URL, 
            { headers:{token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQzNTEzZjU1MWE0MWZiNTFiNmFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDAxNTEzOSwiZXhwIjoxNjQwNDQ3MTM5fQ.iwCvhCsCIJEAe49PG6jz2apc5kqQM-tPcJZZRl8esTA"}})
            setProducts(res.data)
            
        }
        getCategoryProducts();
    },[category])

    return (
        <Container>
            
            <Wrapper>
                { products.map(product=><Product product={product}/>)}
                
            </Wrapper>

            <Adver>        
                <Image src="https://i.pinimg.com/originals/b1/a1/ec/b1a1ec19f494b9aaafbf965274c59b11.jpg" alt=""/>
            </Adver>
        </Container>
    )
}

export default CategoryProducts;

import Category from './CategoryItem';
import {Categories_data} from "../dummyData";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display:flex;
    justify-content: space-evenly;
    padding: 10px 0px;
    box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75);
    height: 100px;
    z-index: 1;
    background-color: white;
    cursor: pointer;
`;

function Categories() {
    return (
        
            <Container>
                { Categories_data.map(category => (<Link 
                to={`/category/${category.name}`} 
                style = {{textDecoration:"none"}}>
                    <Category image={category.image} name={category.name}/>
                    </Link>))} 
            </Container>
    )
}

export default Categories;


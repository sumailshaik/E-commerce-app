import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`;

const Image = styled.img`
    height: 66px;
    object-fit: cover;
`;

const Title = styled.p`
    color: black;
`;

function Category({image,name}) {
    return (
        <Container>
            <Image src={image} alt=""/>
            <Title>{name}</Title>
        </Container>
    )
}

export default Category

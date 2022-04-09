import Row from './Row';
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

function Feed() {
    return (
        <Container>
            <Row title="Deals of the Day"/>
            <Row title="Trending Offers"/>
            <Row title="Best of Appliances"/>
        </Container>
    )
}

export default Feed;

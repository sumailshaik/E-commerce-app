import Header from '../Components/Header'
import Categories from  '../Components/Categories'
import Carousel from '../Components/Carousel';
import Feed from '../Components/Feed'
import styled from 'styled-components'

const Container = styled.div`
`;

const Home = () => {
    return (
        <Container >
            <Header/>
            <Categories/>
            <Carousel />
            <Feed/>
        </Container>
    )
}

export default Home;

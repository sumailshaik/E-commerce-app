import Header from './Components/Header';
import Categories from './Components/Categories';
import ProductDetails from './pages/ProductDetails';
import CategoryProducts from './pages/CategoryProducts'
import Home from "./pages/Home";
import styled from 'styled-components';
import { useContext } from 'react';
import { DataLayer } from './context/Context';
import Modal from "./Components/Modal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart';
import Users from './pages/Users';


const Container = styled.div`
  background-color: #f1f2f5;
  position: relative;
  height: ${props => props.openModal && "100vh"};
  overflow: ${props => props.openModal && "hidden"};
`;


function App() {
  const { openModal } = useContext(DataLayer)

  return (
      <Router>
        <Container openModal={openModal} >
          <Switch>

            <Route path="/product/:productId">
              <Header/>
              <ProductDetails/>
              {openModal && <Modal/>}
            </Route>

            <Route path="/users">
              <Header/>
              <Users/>
            </Route>
            
            <Route path="/category/:category">
              <Header/>
              <Categories/>
              <CategoryProducts />
              {openModal && <Modal/>}
            </Route>

            <Route path="/cart/">
              <Header/>
              <Cart/>
            </Route>

            <Route path="/">
              <Home />
              {openModal && <Modal/>}
            </Route>

          </Switch>
          
        </Container>
      </Router>
  );
}

export default App;



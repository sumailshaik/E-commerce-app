import { Close } from "@material-ui/icons";
import { useContext } from "react";
import styled from "styled-components";
import { closeModal } from "../context/Actions";
import { DataLayer } from "../context/Context";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top:0;
  left:0;
  z-index:2;
`;

const Wrapper = styled.div`
  height:100%;
  weight:100%;
  display:flex;
  justify-content: center;
  align-items:center;
  position: relative;
`;

const CloseStyle = {
  position: "absolute",
  top:"35px",
  right:"270px",
  cursor: "pointer"
}

const Modal = () => {

  const {isSignup, dispatch} = useContext(DataLayer)

  return (
    <Container>
      <Wrapper>
        {isSignup? <Signup/> :<Login/> }
        <Close style = {CloseStyle} htmlColor="white" onClick = {()=> dispatch(closeModal())}/>
      </Wrapper>
    </Container>
  )
}

export default Modal;

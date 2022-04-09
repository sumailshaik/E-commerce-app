import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import {images} from '../dummyData';
import styled from "styled-components";
import { useRef } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
    width:100%;
    box-sizing: border-box;
    padding: 18px 19px 18px 19px;
`;

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 97%px;
`;

const Slide = styled.div`
    height:260px;
    display: flex;
`;

const Image = styled.img`
    object-fit: cover;
`;

const PrevBtn = styled.button`
    position:absolute;
    top:79px;
    background-color: white;
    border: 1px white solid;
    border-radius: 0px 6px 6px 0px;
    height: 104px;
    width:47px;
`;

const NextBtn = styled.button`
    position: absolute;
    right: 0px;
    top: 79px;
    background-color: white;
    border: 1px white solid;
    border-radius: 6px 0px 0px 6px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .11);
    height: 104px;
    width:47px;
`;

function Carousel() {

    const carouselSlide = useRef()
    const counter = useRef(1)   

    const prev_btn = () => {
        if(counter.current <= 0 ) return;
        carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
        counter.current = counter.current - 1;
        carouselSlide.current.style.transform = `translateX(${-1240*counter.current}px)`;
    }

    const next_btn = () => {
        if(counter.current >= images.length-1 ) return;
        carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
        counter.current = counter.current + 1;
        carouselSlide.current.style.transform = `translateX(${-1240*counter.current}px)`;
    }

    const afterTransition = () => {
        if(counter.current === 0){
            carouselSlide.current.style.transition = "none";
            counter.current = images.length - 2;
            carouselSlide.current.style.transform = `translateX(${-1240*counter.current}px)`;
        }
        if(counter.current === images.length-1){
            carouselSlide.current.style.transition = "none";
            counter.current = images.length - counter.current;
            carouselSlide.current.style.transform = `translateX(${-1240*counter.current}px)`;
        }
        console.log("ended transition")
    }

    useEffect(()=>{
        carouselSlide.current.style.transform = `translateX(-1240px)`;
        const interval = setInterval(() => {
            next_btn();
          }, 4000);
          return () => clearInterval(interval);
    },[])

    return (
        <Container>
            <Wrapper>
                
                <Slide  ref = {carouselSlide}
                        onTransitionEnd={afterTransition}>
                        
                    {images.map((image)=>
                    <Image src={image} alt=""/>
                    )}

                </Slide>

                <PrevBtn onClick={prev_btn} ><ArrowBackIosOutlinedIcon/></PrevBtn>
                <NextBtn onClick={next_btn} ><ArrowForwardIosOutlinedIcon/></NextBtn>
                
            </Wrapper>
            
        </Container>
    )
}

export default Carousel;

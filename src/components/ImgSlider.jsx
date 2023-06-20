import React from 'react'
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import badag from '../assets/images/slider-badag.jpg'
import badging from '../assets/images/slider-badging.jpg'
import scale from '../assets/images/slider-scale.jpg'
import scales from '../assets/images/slider-scales.jpg'

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
  return (
      <Carousel {...settings} className='imgSlider'>
        <Wrapper>
            <a>
                <img src={badag} alt='' />
            </a>
        </Wrapper>

        <Wrapper>
            <a>
                <img src={badging} alt='' />
            </a>
        </Wrapper>

        <Wrapper>
            <a>
                <img src={scale} alt='' />
            </a>
        </Wrapper>

        <Wrapper>
            <a>
                <img src={scales} alt='' />
            </a>
        </Wrapper>
      </Carousel>
  );
};

const Carousel = styled(Slider)`
    height: auto;

    & > button{
        z-index: 1;
        opacity: 0;
        height: 100%;
        position: absolute;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease;
        }
    }

    img{
        height: 100%;
        max-width: 100%;
    }

    ul li button{
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    .slick-list {
        overflow: initial;
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-prev {
        left: -40px;
    }

    .slick-next {
        right: -40px;
    }
`;

const Wrapper = styled.div`
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    &:hover{
        padding: 0;
        border: 4px solid white;
        transition-duration: 300ms;
    }
`;

export default ImgSlider

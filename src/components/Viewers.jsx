import React from 'react'
import styled from 'styled-components';

import disney from '../assets/images/viewers-disney.png';
import marvel from '../assets/images/viewers-marvel.png';
import national from '../assets/images/viewers-national.png';
import pixar from '../assets/images/viewers-pixar.png';
import starwars from '../assets/images/viewers-starwars.png';

import disneyVid from '../assets/videos/1564674844-disney.mp4';
import marvelVid from '../assets/videos/1564676115-marvel.mp4';
import pixarVid from '../assets/videos/1564676714-pixar.mp4';
import nationalVid from '../assets/videos/1564676296-national-geographic.mp4';
import starwarsVid from '../assets/videos/1608229455-star-wars.mp4';

const Viewers = () => {
  return (
    <Container>
      <Wrapper>
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={disneyVid} type="video/mp4"/>
        </video>
        <img src={disney} alt=''></img>
      </Wrapper>

      <Wrapper>
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={pixarVid} type="video/mp4"/>
        </video>
        <img src={pixar} alt=''></img>
      </Wrapper>

      <Wrapper>
        <video autoPlay={true} loop={true} playsInline={true} muted> 
          <source src={marvelVid} type="video/mp4"/>
        </video>
        <img src={marvel} alt=''></img>  
      </Wrapper>

      <Wrapper>
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={starwarsVid} type="video/mp4"/>
        </video>
        <img src={starwars} alt=''></img>
      </Wrapper>

      <Wrapper>
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={nationalVid} type="video/mp4"/>
        </video>
        <img src={national} alt=''></img>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  border: 2px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

  img{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  video{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    object-fit: cover;
    top: 0;
    display: inline-block;
    opacity: 0;
  }

  &:hover{
    border: 2px solid white;
    transition: border 0.5s ease-out, height 1s ease-out, width 1s ease-out;
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    video{
      opacity: 1;
    }
  }
`;

export default Viewers

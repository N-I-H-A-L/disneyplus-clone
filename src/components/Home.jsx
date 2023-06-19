import React from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import db from '../firebaseConfig';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';

import background from '../assets/images/home-background.png';

const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  let recommends = [];
  let viewers = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${background}) center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

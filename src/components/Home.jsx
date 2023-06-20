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

  useEffect(()=>{
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];
    db.collection('movies').onSnapshot((snapshot)=>{
      snapshot.docs.map((doc)=>{
        switch(doc.data().type){
          case "recommend":
            recommends = [...recommends, {id: doc.id, ...doc.data()}];
            break;
          case "new":
            newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}];
            break;
          case "original":
            originals = [...originals, {id: doc.id, ...doc.data()}];
            break;
          case "trending":
            trendings = [...trendings, {id: doc.id, ...doc.data()}];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings
        })
      );
    });
  }, [username]);

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
  /* min-height: calc(100vh - 250px); */
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  height: 100%;

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

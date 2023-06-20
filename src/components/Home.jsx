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
  //Get the username using useSelector hook and selectUserName action. (See userSlice.js)
  const username = useSelector(selectUserName);

  //Before reading the below code, review movieSlice.js once.
  useEffect(()=>{
    //We want the movies of different types to be separated and kept in different arrays, so we can send it
    //to update the state.
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];
    //Loop all the "movies" present using "map()". And keep them in the respective array depending on
    //their types.
    db.collection('movies').onSnapshot((snapshot)=>{
      snapshot.docs.map((doc)=>{
        switch(doc.data().type){
          case "recommend":
            //The below syntax says: copy whatever you have in recommends to recommends (spread operator 
            //'...') and add the current doc.id and ...doc.data() (again it's spread operator, to
            //write whatever you have inside doc.data() to be stored) to it. 
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
      
      //Dispatch the newly updated list of movies, which will be fetched by different components as and
      //when required.
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
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  height: auto;
  background: url(${background}) center center / cover
      no-repeat fixed;
  padding-bottom: calc(3.5vw + 15px);

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

import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectRecommend } from '../features/movie/movieSlice';

const Recommends = () => {
  //Retrieve all the 'recommend' type movies from Redux store using useSelector hook and 'selectRecommend'
  //action.
  const movies = useSelector(selectRecommend);

  //Loop the movies present using 'map()', and create HTML elements so they can be rendered on the webpage.
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies && //if movies is not empty, then the code after && will run.
          movies.map((movie, key)=>(
            <Wrapper id={key}>
              <Link to={'/detail/' + movie.id}> 
              {/* We want movie's id to be added with 'detail' so that we can retrieve the movie's id
              using useParams(), see 'Detail.jsx' to understand. */}
                <img src={movie.cardImg} alt={movie.title}/>
              </Link>
            </Wrapper>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 50px;
  padding: 0 0 26px;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrapper = styled.div`
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;

  img{
    height: 100%;
    width: 100%;
  }

  &:hover{
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends

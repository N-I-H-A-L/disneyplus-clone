import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Originals = () => {
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        <Wrapper>
          <Link to='/'>
            {/* <img src=${} alt=''/> */}
          </Link>
        </Wrapper>

        <Wrapper>
          <Link to='/'>
            {/* <img src=${} alt=''/> */}
          </Link>
        </Wrapper>

        <Wrapper>
          <Link to='/'>
            {/* <img src=${} alt=''/> */}
          </Link>
        </Wrapper>

        <Wrapper>
          <Link to='/'>
            {/* <img src=${} alt=''/> */}
          </Link>
        </Wrapper>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top: 50px;
  padding: 0 0 26px;
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
  border: 3px solid rgba(249, 249, 249, 0.8);

  img{

  }

  &:hover{
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;

export default Originals

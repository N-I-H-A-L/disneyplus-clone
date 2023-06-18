import React from 'react'
import styled from 'styled-components';

import background from '../assets/images/home-background.png';

const Home = (props) => {
  return (
    <Container>
      Helloooooooooooooooooooo
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  background-image: url(${background});
`;

export default Home;

import styled from 'styled-components';
import React from 'react';
import Background from '../assets/images/login-background.jpg'
import { ReactComponent as LogoOneSvg } from '../assets/images/cta-logo-one.svg';

const Login = (props) => {
  return (
    <Container>
        <Content>
          <CTA>
            <CTALogoOne>
              <LogoOneSvg/>
            </CTALogoOne>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src={require('../assets/images/cta-logo-two.png')} alt=""/>
          </CTA>
          <BgImage/>
        </Content>
    </Container>
  )
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Content = styled.div`
  height: 88.8vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

const BgImage = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  background-position: top;
  background-size: cover;
  z-index: -1;
  box-sizing: border-box;
`;

const CTA = styled.div`
  height: 100%;
  width: 100%;
  max-width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  padding: 40px;
`;

const CTALogoOne = styled.div`
  height: 10vh;
  width: 100%;
  position: relative;
  max-width: 650px;
  min-width: 300px;
  min-height: 1px;
  display: block;
`;

const SignUp = styled.a`
  color: #f9f9f9;
  background-color: #0063e5;
  padding: 16.5px;
  letter-spacing: 1.5px;
  font-size: 18px;
  width: 100%;
  position: relative;
  top: 5%;
  border: 2px solid transparent;
  text-align: center;
  border-radius: 4px;

  &:hover{
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 0.7rem;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 5%;
`;

const CTALogoTwo = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  bottom: 18%;
`;

export default Login;

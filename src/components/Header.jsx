import styled from 'styled-components';
import React from 'react'

import logoSvg from '../assets/images/logo.svg';
import homeSvg from '../assets/images/home-icon.svg';
import searchSvg from '../assets/images/search-icon.svg';
import moviesSvg from '../assets/images/movie-icon.svg';
import originalsSvg from '../assets/images/original-icon.svg';
import watchlistSvg from '../assets/images/watchlist-icon.svg';
import seriesSvg from '../assets/images/series-icon.svg';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';

import { auth, provider } from '../firebaseConfig.js';

const Header = (props) => {
  //useDispatch is for dispatching the request for pulling data from store.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //useSelector will go to the store and pull 'selectUserName', similarly, 'selectUserPhoto'.
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser = (user) => {
    //We are dispatching the information of the user to the Redux Store.
    //This will update the states of 'name', 'email' and 'photo'.
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    );
  };

  //The function under useEffect hook will get triggered whenever the value of 'username' changes.
  useEffect(()=>{
    //We want to track the state of 'username' and whenever username changes, check if the 'user' is 
    //a valid user or not, if it's a valid user, then load the 'Home.js'  component and also call the
    //'setUser' function for updating the state. (Otherwise, the 'Login.js' component will be displayed 
    //on the screen).
    //navigate('/home' will change the URL of the website to '/home' thus, Home.js will be loaded).
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        setUser(user);
        navigate('/home');
      }
    });
  }, [username]);

  const handleAuth = () =>{
    //This is the code for authorization, the signInWithPopup is a method to login, a popup window will
    //be displayed on the screen (and that will be of Google since 'provider' is GoogleAuthProvider). 

    //auth.signInWithPopup(provider) is a promise, if it is resolved correctly then the resolved value
    // will be sent to the .then() function as argument and .then() function will be executed otherwise
    // .catch() function will be executed.
    
    if(!username){
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    else if(username){
      auth
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        navigate("/");
      })
      .catch((err) => alert(err.message));
    }
  };

  return (
    <Nav className='navbar'>
      <Logo>
        <img src={logoSvg} alt="Disney+" />
      </Logo>
      {!username? 
        <Login onClick={handleAuth}>LOGIN</Login> :
        <>
          <NavMenu>
            <a href="/home">
              <img src={homeSvg} alt="HOME"/>
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src={searchSvg} alt="SEARCH"/>
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src={watchlistSvg} alt="WATCHLIST"/>
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src={originalsSvg} alt="ORIGINALS"/>
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src={moviesSvg} alt="MOVIES"/>
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src={seriesSvg} alt="SERIES"/>
              <span>SERIES</span>
            </a>
          </NavMenu> 
          <SignOut>
            <UserImg src={userPhoto}></UserImg>
            <Dropdown onClick={handleAuth}>Sign Out</Dropdown>
          </SignOut>
        </>
      }
    </Nav>
  )
}

const Nav = styled.nav`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    background-color: #090b13;
    z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 10px;
  margin-left: 25px;
  align-items: center;

  a{
    display: flex;
    margin-right: 25px;
    img{
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      position: relative;
      top: 2px;
    }

    span{
      color: rgb(249, 249, 249);
      font-size: 13px;
      position: relative;
      top: 2px;
      letter-spacing: 1.42px;
      line-height: 1.5;

      &::before{
        content: "";
        background-color: rgb(249, 249, 249);
        transition: width 0.3s ease-in-out;
        height: 2px;
        display: block;
        position: relative;
        top: 22px;
        width: 0;
      }

      &:hover::before{
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 850px){
    display: none;
  }
`;

const Login = styled.a`
  color: #f9f9f9;
  border: 1px solid #f9f9f9;
  letter-spacing: 1.5px;
  padding: 12px 16px;
  border-radius: 4px;
  transition: all 0.2s ease 0;

  &:hover{
    background-color: #f9f9f9;
    border: transparent;
    color: #000;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 105px;
  position: relative;
  right: 45px;
  top: 5px;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
`;

const UserImg = styled.img`
  height: 70%;
  width: auto;
  margin-top: 11px;
  border-radius: 100%;
  position: relative;
  left: 40px;
`;

const SignOut = styled.div`
  height: 100%;

  &:hover{
    ${Dropdown}{
      opacity: 1;
      transition: 1s;
    }
  }
`;

export default Header;

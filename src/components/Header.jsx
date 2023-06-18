import styled from 'styled-components';
import React from 'react'

import logoSvg from '../assets/images/logo.svg';
import homeSvg from '../assets/images/home-icon.svg';
import searchSvg from '../assets/images/search-icon.svg';
import moviesSvg from '../assets/images/movie-icon.svg';
import originalsSvg from '../assets/images/original-icon.svg';
import watchlistSvg from '../assets/images/watchlist-icon.svg';
import seriesSvg from '../assets/images/series-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';

import { auth, provider } from '../firebaseConfig.js';

const Header = (props) => {
  //useDispatch is for dispatching the request for pulling data from store.
  const dispatch = useDispatch();
  const history = useNavigate();
  //useSelector will go to the store and pull 'selectUserName', similarly, 'selectUserPhoto'.
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () =>{
    auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
  };

  const setUser = (user) => {
    //We are dispatching the information of the user to the Redux Store.
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    );
  };

  return (
    <Nav>
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
          <UserImg src={userPhoto}></UserImg>
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

const UserImg = styled.img`
  height: 70%;
  margin-right: 10px;
  border-radius: 100%;
`;

export default Header;

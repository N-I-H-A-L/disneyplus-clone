import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import db from '../firebaseConfig';

import playBlack from '../assets/images/play-icon-black.png';
import playWhite from '../assets/images/play-icon-white.png';
import groupIcon from '../assets/images/group-icon.png';

//useParams() hook helps in retrieving data from the URL of the website, check in the App component, for
// Detail page we gave ":id" as the URL, so we will retrieve that URL using useParams(), which will give us
// the ID of the movie, we want to target.
const Detail = () => {
    const { id } = useParams();
    //We will update state of 'detailState' using useState hook.
    const [detailState, setDetailState] = useState({});

    //Whenever, the ID in the URL changes (and since useParams() is a hook, it will track if ID changes), 
    //we want the following to happen:
    //Search from the "movies" collection of our firebase database and find if there's any movie with the
    //ID as 'id', if doc exists, update detailState. 
    //If any error occurred while fetching data, prompt an alert.
    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setDetailState(doc.data());
            }
            else{
                console.log("Document doesn't exists.");
            }
        }).catch((error)=>{
            alert("Error in fetching Details: ", error);
        });
    }, [id]);

  return (
    <Container>
        <Background>
            <img src={detailState.backgroundImg} alt='' />
        </Background>

        <Content>
            <TitleImg>
                <img src={detailState.titleImg} alt="" />
            </TitleImg>
            <Controls>
                <Player>
                    <img src={playBlack} alt='Play'/>
                    <span>PLAY</span>
                </Player>
                <Trailer>
                    <img src={playWhite} alt='Trailer'/>
                    <span>TRAILER</span>
                </Trailer>
                <GroupIcon>
                    <img src={groupIcon} alt=''/>
                </GroupIcon>
            </Controls>

            <Subtitle>
                {detailState.subTitle}
            </Subtitle>

            <Description>
                {detailState.description}
            </Description>
        </Content>
    </Container>
  );
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    overflow-x: hidden;
`;

const Background = styled.div`
    padding: 0;
  img{
    z-index: -1;
    opacity: 0.8;
    display: inline-block;
    height: auto;
    position: absolute;
    width: 100%;

    @media (max-width: 768px){
        height: 100%;
    }

    @media (max-width: 1068px) and (min-width: 768px){
        height: 100%;
        width: 100%;
    }
  }  
`;

const TitleImg = styled.div`
    margin-left: 70px;
    img{
        height: 20vw;
        width: auto;
        min-height: 150px;
        min-width: 250px;

        @media (max-width: 300px){
            width: 50px;
        }
    }

    @media (max-width: 768px){
        margin-left: 30px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(10vw + 100px);
    left: 0;
`;

const Controls = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 380px){
        flex-direction: column;
    }
`;

const Player = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(249, 249, 249);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    border: none;
    margin: 30px;
    width: 150px;
    height: 44px;
    margin-left: 70px;
    letter-spacing: 1.8px;
    line-height: 1.4;

    &:hover{
        background-color: rgb(198, 198, 198);
        cursor: pointer;
    }

    @media (max-width: 768px){
        margin: 30px;
    }
`;

//inherit the styles of Player Component
const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    margin-left: -10px;

    @media (max-width: 380px){
        margin-left: 30px;
        margin-top: -15px;
    }
`;

const GroupIcon = styled.div`
    margin-top: 30px;
    margin-left: -10px;
    border: 2px solid white;
    border-radius: 100%;
    height: 100%;
    width: auto;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 420px){
        display: none;
    }
`;

const Subtitle = styled.div`
    font-size: 15px;
    color: white;
    margin-left: 70px;
    margin-bottom: 10px;
    word-wrap: normal;
    
    @media (max-width: 768px){
        font-size: 12px;
        margin-left: 30px;
    }
`;

const Description = styled.div`
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    margin-left: 70px;
    width: 800px;
    word-spacing: 1.2;
    letter-spacing: 1.3;

    @media (max-width: 870px){
        font-size: 15px;
        margin-left: 30px;
        width: auto;
    }
`;

export default Detail;

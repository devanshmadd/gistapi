//Design for card components
import React from "react";
import styled from 'styled-components'; 
import {CodeIcon, RepoForkedIcon, CommentIcon, StarFillIcon, FileIcon} from '@primer/octicons-react';
import {Marginer} from './marginer';
import ReactRoundedImage from "react-rounded-image";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles'; 

const Card = ({ image, username, html_url, totalFiles, createdAt, lastUpdated , forks_url,comments_url,starred_url,description,filename,file_url}) => {
  const classes = useStyles();
  
  return ( //Designing structure for one element of the list
    <List className={classes.root}>
      <ListItem>
      <Box paddingLeft = {2} paddingRight = {2} paddingBottom={2} alignItems = "center" justifyContent="center">
      <Heading>
      <Avatar>
      <ReactRoundedImage
          image={image}
          roundedColor="#321124"
          imageWidth="50"
          imageHeight="50"
          roundedSize="2"
          borderRadius="60"/>
      </Avatar>
        <Marginer direction = "horizontal" margin = {5} />
        <Username><a href={html_url} style={{ textDecoration: 'none' }}>{username}</a></Username>
        <Marginer direction = "horizontal" margin = {90} />
        <CodeIcon size = {24}/>
        <Marginer direction = "horizontal" margin = {3} />
        <Files> <a href={file_url} style={{ textDecoration: 'none' }}>{totalFiles} File</a></Files>
        <Marginer direction = "horizontal" margin = {9} />
        <RepoForkedIcon size = {24}/>
        <Marginer direction = "horizontal" margin = {3} />
        <Forks><a href={forks_url} style={{ textDecoration: 'none' }}>Forks</a></Forks>
        <Marginer direction = "horizontal" margin = {9} />
        <CommentIcon size = {24}/>
        <Marginer direction = "horizontal" margin = {3} />
        <Comments><a href={comments_url}style={{ textDecoration: 'none' }}>Comments</a></Comments>
        <Marginer direction = "horizontal" margin = {9} />
        <StarFillIcon size = {24}/>
        <Marginer direction = "horizontal" margin = {3} />
        <Stars><a href={starred_url}style={{ textDecoration: 'none' }}>Stars</a></Stars>
      </Heading>
      <Marginer direction = "vertical" margin = {10} />
      <Date>
        Created at: {createdAt} 
        <Marginer direction = "horizontal" margin = {50} />
        Last updated: {lastUpdated}
      </Date>
      <Marginer direction = "vertical" margin = {10} />
      <Info>
        {description}
      </Info>
      <Marginer direction = "vertical" margin = {10} />
      <Data><FileIcon size = {24}/>
      <Marginer direction = "horizontal" margin = {3} />
      <a href={file_url} style={{ textDecoration: 'none' }}>{filename}</a></Data>
      <Marginer direction = "vertical" margin = {30} />
      <Divider light />
      </Box>
      </ListItem>
      </List>

    
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


const Heading = styled.div`  
  background: white;
  display: flex;
  flex-direction: space-between;
  align-items: center;
`; // contains avatar, username, fileurl, forkurl, commentsurl and starsurl

const Avatar = styled.div`
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: left;
`;

const Date = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:flex-start;
  height: auto;
  width: auto;
`; //created and updated date


const Info = styled.div`
  background: white;
  text-color: gray
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Username = styled.div`
  background: White;
`;

const Files = styled.div`
  background: white;
  display:flex;
  flex-direction: row;
`;

const Forks = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  
`;

const Comments = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Stars = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Data = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  align-items:center;
  height: auto;
  width: auto;
`;

export default Card;
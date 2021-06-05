import styled from 'styled-components';
import {HorizontalRuleIcon, CodeIcon, RepoForkedIcon, CommentIcon, StarFillIcon, FileIcon} from '@primer/octicons-react';
import {Marginer} from './marginer';
import ReactRoundedImage from "react-rounded-image";

const Card = ({ image, username, html_url, totalFiles, createdAt, lastUpdated , icon, forks_url,comments_url,starred_url,description,filename}) => {
  return (
    <List>
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
        <Username><a href={html_url}>{username}</a></Username>
        <Marginer direction = "horizontal" margin = {90} />
        <icon><CodeIcon size = {24}/></icon>
        <Marginer direction = "horizontal" margin = {3} />
        <Files>{totalFiles} Files</Files>
        <Marginer direction = "horizontal" margin = {9} />
        <icon><RepoForkedIcon size = {24}/></icon>
        <Marginer direction = "horizontal" margin = {3} />
        <Forks><a href={forks_url}>Forks</a></Forks>
        <Marginer direction = "horizontal" margin = {9} />
        <icon><CommentIcon size = {24}/></icon>
        <Marginer direction = "horizontal" margin = {3} />
        <Comments><a href={comments_url}>Comments</a></Comments>
        <Marginer direction = "horizontal" margin = {9} />
        <icon><StarFillIcon size = {24}/></icon>
        <Marginer direction = "horizontal" margin = {3} />
        <Stars><a href={starred_url}>Stars</a></Stars>
      </Heading>
      <Date>
        Created at: {createdAt} 
        <Marginer direction = "horizontal" margin = {50} />
        Last updated: {lastUpdated}
      </Date>
      <Info>
        Description: {description}
      </Info>
      <Data><icon><FileIcon size = {24}/></icon></Data>
      {filename}
      <icon><HorizontalRuleIcon size = {100}/></icon>
    </List>
    
  );
};

const List = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flext-start;
  margin-left: 600px;
  margin-right: 500px;
`;

const Heading = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const Avatar = styled.div`
    background: white;
    display: flex;
    flex-direction: row;
    align-items: left;
`;

const Date = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content:flex-start;
`;


const Info = styled.div`
  background: white;
  text-color: gray
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

const Username = styled.div`
  background: White;
`;

const Files = styled.div`
  background: White;
`;

const Forks = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

`;

const Comments = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Stars = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Data = styled.div`
  background: White;
  display:flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default Card;
import styled from 'styled-components';
import {ZapIcon, HorizontalRuleIcon, CodeIcon, RepoForkedIcon, CommentIcon, StarFillIcon} from '@primer/octicons-react';
import {Marginer} from './marginer';

const Card = ({ image, username, totalFiles, createdAt, lastUpdated , icon}) => {
  return (
    <List>
      <Heading>
      <avatar_url>{image}</avatar_url>
        <Username>{username}</Username>
        <Marginer direction = "horizontal" margin = {90} />
        <icon><CodeIcon size = {24}/></icon>
        <Files>{totalFiles} Files</Files>
        <Marginer direction = "horizontal" margin = {9} />
        <icon><RepoForkedIcon size = {24}/></icon>
        <Forks>Forks</Forks>
        <Marginer direction = "horizontal" margin = {9} />
        <icon><CommentIcon size = {24}/></icon>
        <Comments>Comments</Comments>
        <Marginer direction = "horizontal" margin = {9} />
        <icon><StarFillIcon size = {24}/></icon>
        <Stars>Stars</Stars>
      </Heading>
      <Date>
        Created at: {createdAt} Last updated: {lastUpdated}
      </Date>
      <Info>files</Info>
      <icon><HorizontalRuleIcon size = {100}/></icon>
    </List>
    
  );
};

const List = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.div`
  background: yellow;
`;

const Info = styled.div`
  background: red;
`;

const Username = styled.div`
  background: White;
`;

const Files = styled.div`
  background: White;
`;

const Forks = styled.div`
  background: White;
`;

const Comments = styled.div`
  background: White;
`;

const Stars = styled.div`
  background: White;
`;

export default Card;
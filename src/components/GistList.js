import React from 'react';
//import { Octokit } from "@octokit/rest";
import {HorizontalRuleIcon} from '@primer/octicons-react'
import Card from './Card';
import dateFormat from 'dateformat';

const GistList = ({ gists }) => {


  return (
    <ol>
      {gists.map((gist, i) => (
        <Card
          key={i}
          image ={gist.owner.avatar_url}
          html_url = {gist.owner.html_url}
          username={gist.owner.login}
          totalFiles={3}
          forks_url={gist.forks_url}
          comments_url = {gist.comments_url}
          starred_url = {gist.owner.starred_url}
          createdAt={dateFormat(gist.createdAt, "mmmm dS, yyyy")}
          lastUpdated={dateFormat(gist.updatedAt, "mmmm dS, yyyy")}
          description = {gist.description}
          filename = {Object.entries(gist.files)[0][1].filename}
          icon = {HorizontalRuleIcon}
        />
      ))}
    </ol>

    );
  
};

export default GistList;
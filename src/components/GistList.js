import React from 'react';
//import { Octokit } from "@octokit/rest";
import {BeakerIcon, HorizontalRuleIcon, ZapIcon} from '@primer/octicons-react'
import Card from './Card';

const GistList = ({ gists }) => {
  const changeDateFormat = date => {
    return date;
  };

  return (
    <ol>
      {gists.map((gist, i) => (
        <Card
          key={i}
          image ={gist.owner.avatar_url.png}
          username={gist.owner.login}
          totalFiles={3}
          createdAt={changeDateFormat(gist.created_at)}
          lastUpdated={gist.updated_at}
          icon = {HorizontalRuleIcon}
        />
        
        
      ))}
    </ol>

    );
  
};

export default GistList;
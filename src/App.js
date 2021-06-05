import { useState, useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyle';

import Header from './components/Header';
import GistList from './components/GistList';

import { getPublicGists } from './services/gistService';

const App = () => {
  const [gists, setGists] = useState([]);
  const [displayGists, setDisplayGists] = useState([]);
  const [username, setUsername] = useState('');
  const usernameCallBack = username => setUsername(username);

  // only runs one time when component is mounted
  useEffect(
    () =>
      getPublicGists()
        .then(res => res.data)
        .then(gists => {
          setGists(gists);
          setDisplayGists(gists);
        })
        .then(() => console.log('Public Gists Fetched!')),
    []
  );

  useEffect(() => {
    if (username) {
      const filteredGists = gists.filter(gist => {
        let re = new RegExp(username, 'i');
        return re.test(gist.owner.login);
      });
      setDisplayGists(filteredGists);
    }
  }, [username]);

  useEffect(() => console.log(gists), [gists]);

  return (
    <Wrapper className="App" data-testid="app">
      <Header usernameCallBack={usernameCallBack} />
      <GistList gists={displayGists} />
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyle';
import Header from './components/Header';
import GistList from './components/GistList';
import { getPublicGists} from './services/gistService';

const App = () => {
  const [gists, setGists] = useState([]); //fetch gists from the public gists available
  const [displayGists, setDisplayGists] = useState([]); //send the fetched gists for display
  const [username, setUsername] = useState(''); // filter the usernames from the array of fetched gists
  const usernameCallBack = username => setUsername(username); //used to make a call from child to parent - callback function

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

  //filtering search from the array of the public gists fetched
  useEffect(() => {
    if (username) {
      const filteredGists = gists.filter(gist => {
        let re = new RegExp(username, 'i'); //regex for filtering the data based on the input
        return re.test(gist.owner.login);
      });
      setDisplayGists(filteredGists);

    }
  }, [username]);

  useEffect(() => console.log(gists), [gists]); //the array of public gists fetched.

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

import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";
import gistService, { getPublicGists } from "./services/gistService";



const App = () => {
  const [username,setUsername] = useState("");

  const [gists, setGists] = useState([])

  useEffect(() => {
    getPublicGists()
    .then(response => response.data)
      .then(gists => setGists(gists))
  })

  useEffect(() => {
    if (username) {
      setGists(gists.filter(gist => gist.username === username))
    }
  }, [username])
  


  return (
    <Wrapper className="App" data-testid="app">
     <Header username={username} setUsername={setUsername} />
      <GistList gists={gists}/>


      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;

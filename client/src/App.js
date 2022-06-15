import {useEffect, useState} from 'react'
import {accessToken} from './spotify'
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(accessToken)
  }, [])

  return (
    <div className="App">
      {
        !token ?  (
          <a
          className="App-link"
          href="http://localhost:8888/login"
        >
          Login to Spotify
        </a>) : (
          <h1>Logged in</h1>
        )
      
        }
    </div>
  );
}

export default App;

import {useEffect, useState} from 'react'
import {getAccessToken, logout} from './spotify'
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(getAccessToken)
    
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
          <>
          <h1>Logged in</h1>
          <button onClick={logout}>log out</button>
          </>
          
        )
      
        }
    </div>
  );
}

export default App;

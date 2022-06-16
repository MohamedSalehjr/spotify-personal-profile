import {useEffect, useState} from 'react'
import {getAccessToken, logout, getCurrentUserProfile} from './spotify'
import { Routes, Route} from "react-router-dom"
import Profile from "./components/Profile"

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    setToken(getAccessToken)

    const fetchData = async ( ) => {
      try{
        const {data} = await getCurrentUserProfile();
        setProfile(data)
        console.log(data)
      } catch(err){
        console.error(err);
      }
    }
    fetchData();
    
  }, [])

  return (
    <div className="App">
      {
        !token ?  (
          <div className="flex items-center h-screen w-screen">
          <a 
          className="App-link text-xl h-24 rounded-full text-white px-16 py-8 bg-green-500 ml-auto mr-auto hover:bg-green-300"
          href="http://localhost:8888/login"
        >
          Login to Spotify
        </a>
        </div>) : (
          <>
          {profile && (

              <div>
                <Profile profile={profile} />
              </div>
             
            )}
          
          </>
          
        )
      
        }
    </div>
  );
}

export default App;

import {useEffect, useState} from 'react'
import {getAccessToken, getCurrentUserProfile, getCurrentUserPlaylists, getTopArtists} from './spotify'
import { Routes, Route} from "react-router-dom"
import Artists from "./components/Artists"
import Profile from "./components/Profile"

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  
  useEffect(() => {
    setToken(getAccessToken)

    const fetchData = async ( ) => {
      try{
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile.data)

        const userPlaylists= await getCurrentUserPlaylists();
        setPlaylists(userPlaylists.data)

        const userTopArtists = await getTopArtists();
        setTopArtists(userTopArtists.data)
      
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
          {(profile && playlists && topArtists) && (

              <div>
                <Profile profile={profile} playlists={playlists}
                 />
                 <Artists artists={topArtists} />
              </div>
             
            )}
          
          </>
          
        )
      
        }
    </div>
  );
}

export default App;

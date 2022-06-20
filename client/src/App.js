import {useEffect, useState} from 'react'
import {getAccessToken, getCurrentUserProfile, getCurrentUserPlaylists, getTopTracks} from './spotify'
import { Routes, Route,BrowserRouter} from "react-router-dom"
import Artists from "./components/Artists"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import Tracks from "./components/Tracks"
import TopPlaylists from "./components/TopPlaylists"

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  
  useEffect(() => {
    setToken(getAccessToken)

    const fetchData = async ( ) => {
      try{
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile.data)

        const userPlaylists= await getCurrentUserPlaylists();
        setPlaylists(userPlaylists.data)

        const userTopTracks = await getTopTracks();
        setTopTracks(userTopTracks.data);

        console.log(userPlaylists.data)
      
      } catch(err){
        console.error(err);
      }
    }
    fetchData();
    
  }, [])

  const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login'
  : 'https://spotify-profile-v2.herokuapp.com/login';

  return (
    <div className="App">
      {
        !token ?  (
          <div className="flex items-center h-screen w-screen">
          <a 
          className="App-link text-xl h-24 rounded-full text-white px-16 py-8 bg-green-500 ml-auto mr-auto hover:bg-green-300"
          href={LOGIN_URI}
        >
          Login to Spotify
        </a>
        </div>) : (
          <>
          {(profile && playlists) && (

              // <div>
              //   <Profile profile={profile} playlists={playlists}
              //    />
              //    <Artists  artists={topArtists}/>
              //    <Footer/>
              // </div>

              <BrowserRouter>
              <Profile profile={profile} playlists={playlists} />
              <Routes>
                <Route path="/" element={<Artists />}> </Route>
                <Route path="/tracks" element={<Tracks tracks={topTracks} />}> </Route>
                <Route path="/playlists" element={<TopPlaylists playlists={playlists} />}> </Route>
              </Routes>
              
              <Footer/>
            </BrowserRouter>
             
            )}
          
          </>
          
        )
      
        }
    </div>
  );
}

export default App;


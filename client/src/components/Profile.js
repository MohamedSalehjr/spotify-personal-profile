import {logout} from "../spotify"

function Profile (props){

    return(
        <div>
              <div className="flex flex-col items-center static">
                {props.profile.images.length && props.profile.images[0].url && (
                  <img className="w-52 h-52 mt-4 rounded-full" src={props.profile.images[0].url} alt="Avatar"/>
                )}
                <h1 className="mt-2 text-2xl font-bold">{props.profile.display_name}</h1>
                <div className="flex mt-4">
                    <div className="flex flex-col items-center">
                        <p> {props.profile.followers.total}</p>
                        <p>Followers</p>
                    </div>
                    <div className="flex flex-col items-center ml-4">
                        <p> {props.playlists.total} </p>
                        <p>Playlists</p>
                    </div>
                </div>
    
                <button className="absolute top-5  sm:right-10 left- bg-black py-2 px-4 text-white rounded-full hover:text-green-400" onClick={logout}>log out</button>
              </div>
        </div>

    )

}

export default Profile;
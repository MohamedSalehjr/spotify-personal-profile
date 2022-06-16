import {logout} from "../spotify"

function Profile (props){

    return(
        <div>
              <div className="flex flex-col items-center">
                <h1>{props.profile.display_name}</h1>
                <p>{props.profile.followers.total} Followers</p>
                {props.profile.images.length && props.profile.images[0].url && (
                  <img src={props.profile.images[0].url} alt="Avatar"/>
                )}
                <button onClick={logout}>log out</button>
              </div>
        </div>

    )

}

export default Profile;
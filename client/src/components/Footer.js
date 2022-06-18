import "../style.css"
import {Link} from "react-router-dom"

function Footer(){
    return (
        <div className="sticky mt-8 flex items-center justify-center bottom-0 h-24 w-screen bg-black ">
            <Link to="tracks">
                <div className="flex flex-col mr-8 items-center cursor-pointer hover:border-b-2 hover:border-green-400">
                    <ion-icon name="musical-notes-outline"></ion-icon>
                    <p className="text-white">Top Tracks</p>
                </div>
            </Link>

            <Link to="playlists">
                <div className="flex flex-col items-center cursor-pointer hover:border-b-2 hover:border-green-400">
                    <ion-icon name="play-outline"></ion-icon>
                    <p className="text-white">Playlists</p>
                </div>
            </Link>

            <Link to="/">
                <div className="flex flex-col ml-8 items-center cursor-pointer hover:border-b-2 hover:border-green-400">
                    <ion-icon name="mic-outline"></ion-icon>
                    <p className="text-white">Top Artists</p>
                </div>
            </Link>
        </div>
    )
}

export default Footer;
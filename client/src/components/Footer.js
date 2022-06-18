import "../style.css"
import {Link} from "react-router-dom"

function Footer(){
    return (
        <div className="sticky mt-8 flex items-center justify-center bottom-0 h-24 w-screen bg-black ">
            <div className="flex flex-col mr-8 items-center cursor-pointer hover:border-b-2 hover:border-green-400">
                <ion-icon name="musical-notes-outline"></ion-icon>
                <p className="text-white"><Link to="tracks">Top Tracks</Link></p>
            </div>
        <div className="flex flex-col items-center cursor-pointer hover:border-b-2 hover:border-green-400">
                <ion-icon name="play-outline"></ion-icon>
                <p className="text-white">Playlists</p>
            </div>

            <div className="flex flex-col ml-8 items-center cursor-pointer hover:border-b-2 hover:border-green-400">
            <ion-icon name="mic-outline"></ion-icon>
                <p className="text-white"><Link to="/">Top Artists</Link></p>
            </div>/
        
            
        </div>
    )
}

export default Footer;
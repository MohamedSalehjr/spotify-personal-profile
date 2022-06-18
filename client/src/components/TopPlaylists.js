

function TopPlaylists(props){

    return(
       
    <div className="mt-8 flex flex-col">
            <h2 className="ml-8 text-xl font-bold">Playlists</h2>
            <div className="mt-8 px-12 card-list grid grid-cols-1 sm:grid-cols-2 gap-4">
       {props.playlists && props.playlists.items.length ? props.playlists.items.map((playlist, i) => (
            <div className="flex flex-row p-4 items-center bg-green-500 rounded" key={i}>
                    <img className="h-24 w-24 rounded-full" src={playlist.images[0].url} alt={playlist.name} />
                    <div className="flex-col">
                        <h3 className="text-lg text-white ml-4">{playlist.name}</h3>
                       
                    </div>
                    
            </div>
        )): (<p>No Playlists</p>)}
    
</div>
</div>  
  

    )
}


export default TopPlaylists;


function Tracks (props){

    return(
        <div className="mt-8 flex flex-col">
            <h2 className="ml-8 text-xl font-bold">Top Tracks This Month</h2>
            <div className="mt-8 px-12 card-list grid grid-cols-1 sm:grid-cols-2 gap-4">
       {props.tracks && props.tracks.items.length ? props.tracks.items.map((track, i) => (
            <div className="flex flex-row p-4 items-center bg-green-500 rounded" key={i}>
                    <img className="h-24 w-24 rounded-full" src={track.album.images[2].url} alt={track.name}/>
                    <div className="flex-col">
                        <h3 className="text-lg text-white ml-4">{track.name}</h3>
                        <h3 className="text-xs text-white ml-4">{track.album.artists[0].name}</h3>
                    </div>
                    
            </div>
        )): (<p>No Tracks</p>)}
    
</div>
</div>  
    )
}

export default Tracks;
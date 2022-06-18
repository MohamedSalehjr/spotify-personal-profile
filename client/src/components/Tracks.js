

function Tracks (props){

    return(
        <div className="mt-8 flex flex-col">
            <h2 className="ml-8 text-xl font-bold">Top Artists This Month</h2>
            <div className="mt-8 px-12 card-list grid grid-cols-1 sm:grid-cols-2 gap-4">
       {props.tracks && props.tracks.items.length ? props.tracks.items.map((track, i) => (
            <div className="flex flex-row items-center" key={i}>
                    <img className="h-24 w-24 rounded-full" src={track.album.images[2].url} alt={track.name}/>
                    <h3 className="ml-4">{track.name}</h3>
            </div>
        )): (<p>no artists</p>)}
    
</div>
</div>  
    )
}

export default Tracks;
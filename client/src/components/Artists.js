


function Artists (props){
    // console.log(items.length);
    
return(
<div className="mt-8 flex flex-col">
<h2 className="ml-8 text-xl font-bold">Top Artists This Month</h2>
<div className="mt-8 px-12 card-list grid grid-cols-1 sm:grid-cols-2 gap-4">
       {props.artists.items && props.artists.items.length ? props.artists.items.map((artist, i) => (
            <div className="flex flex-row items-center" key={i}>
                    <img className="h-24 w-24 rounded-full" src={artist.images[0].url} alt={artist.name}/>
                    <h3 className="ml-4">{artist.name}</h3>
            </div>
        )): (<p>no artists</p>)}
    
</div>
</div>
)

}

export default Artists;
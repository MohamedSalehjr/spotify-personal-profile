import {getTopArtists} from '../spotify'
import {useEffect, useState} from 'react'

function Artists (){
    // console.log(items.length);
const [topArtists, setTopArtists] = useState(null);
const [range, setRange] = useState("short");



useEffect(() => {

    const fetchData = async ( ) => {
      try{
        const userTopArtists = await getTopArtists(`${range}_term`);
        setTopArtists(userTopArtists.data);
        console.log(userTopArtists.data);
      } catch(err){
        console.error(err);
      }
    }
    fetchData();
    
  }, [range])

  const setVar = ( ) => {
    if(range === "short"){
        return "This Month"
    }else if (range === "medium"){
        return "Last 6 Months"
    }else if (range === "long"){
        return "All Time"
    }
  }


return(
<div className="mt-8 flex flex-col">
<div className="flex justify-between">
<h2 className="ml-8 text-xl font-bold">Top Artists {setVar()}</h2>
<div className="flex">
    <p onClick={() => setRange("short")} className=" hover:border-b-2 hover:border-green-400 cursor-pointer mr-2 sm:mr-4">This Month</p>
    <p onClick={() => setRange("medium")} className=" hover:border-b-2 hover:border-green-400 cursor-pointer mr-2 sm:mr-4">Last 6 Months</p>
    <p onClick={() => setRange("long")} className=" hover:border-b-2 hover:border-green-400 cursor-pointer mr-2 sm:mr-4">All Time</p>
</div>

</div>

<div className="mt-8 px-12 card-list grid grid-cols-1 sm:grid-cols-2 gap-4">
       {topArtists && topArtists.items.length ? topArtists.items.map((artist, i) => (
            <div className="flex flex-row items-center p-4 bg-green-500 rounded" key={i}>
                    <img className="h-24 w-24 rounded-full" src={artist.images[0].url} alt={artist.name}/>
                    <h3 className="ml-4">{artist.name}</h3>
            </div>
        )): (<p>no artists</p>)}
    
</div>
</div>
)

}

export default Artists;
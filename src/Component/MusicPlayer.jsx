import React, { useEffect, useState } from 'react'

const MusicPlayer = () => {
    const [tracks, setTracks] = useState([])
    const [keyword, setKeyword] = useState("Trending")

    useEffect(() => {
        musicData();
      
    }, [])
    

    const musicData=  async ()=>{
        const data= await fetch(`https://v1.nocodeapi.com/nitesh6206/spotify/dXbUMNMOxXHqRfdA/search?q=${keyword}&type=track`);
        const convertedData= await data.json();
        console.log(convertedData.tracks.items);
        setTracks(convertedData.tracks.items);
    }

    return (
        <div>
              <div className="container-fluid d-flex align-items-center p-4 bg-dark">
     <img src="./NS music.png" alt="" width={85}/>
     <img src="./icons" alt="" />
      <div className="d-flex flex-grow-1">
        <input
          className="form-control me-2 flex-grow-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={keyword}
          onChange={(event)=>(setKeyword(event.target.value))}
        />
        <button className="btn btn-outline-success" type="submit" onClick={musicData}>
          Search
        </button>
      </div>
    </div>
            <div className="row m-4 ">
                {
                    tracks.map((track, index) => (
                        <div className="title col-lg-3 col-md-6 mb-3" key={index}>
                            <div className="card col m-20 p-2">
                                <img src={track.album.images[0].url} className="card-img-top" alt="Album Cover" />
                                <div className="card-body">
                                    <h5 className="card-title">{track.name}</h5>
                                    <p className="card-text">{track.artists[0].name}</p>
                                    {track.preview_url &&(
                                    <audio controls className=' w-75'>
                                        <source src={track.preview_url} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                    )}
                                    {!track.preview_url &&(
                                      <p>No Audio Avilable</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MusicPlayer

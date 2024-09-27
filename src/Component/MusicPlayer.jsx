import React, { useState } from 'react';

const MusicPlayer = () => {
  const [tracks, setTracks] = useState([]);
  const [keyword, setKeyword] = useState("Trending");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const musicData = async () => {
    setLoading(true);
    setError(null); // Reset error state before new request
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/nitesh6206/spotify/dXbUMNMOxXHqRfdA/search?q=${
          keyword
        }&type=track`
      );

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      }

      const convertedData = await response.json();

      // Ensure the expected structure exists
      if (
        convertedData &&
        convertedData.tracks &&
        convertedData.tracks.items
      ) {
        setTracks(convertedData.tracks.items);
      } else {
        throw new Error("Unexpected response structure.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container-fluid d-flex align-items-center p-4 bg-dark">
        <img src="./NS music.png" alt="NS Music Logo" width={85} />
        {/* Removed second img with src="./icons" as it was incomplete */}
        <div className="d-flex flex-grow-1">
          <input
            className="form-control me-2 flex-grow-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={musicData}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      <div className="container m-4">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="row">
          {tracks.length > 0 ? (
            tracks.map((track, index) => (
              <div className="title col-lg-3 col-md-6 mb-3" key={index}>
                <div className="card h-100 p-2">
                  <img
                    src={track.album.images[0]?.url || ""}
                    className="card-img-top"
                    alt="Album Cover"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{track.name}</h5>
                    <p className="card-text">{track.artists[0]?.name}</p>
                    {track.preview_url ? (
                      <audio controls className="w-100 mt-auto">
                        <source src={track.preview_url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    ) : (
                      <p className="text-muted">No Audio Available</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <div className="col-12">
                <p className="text-center">No tracks found. Try searching for something else.</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // To navigate between pages

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  // Function to load saved favorites from localStorage
  const loadFavorites = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  };

  useEffect(() => {
    loadFavorites(); // Load saved favorites when the page is mounted
  }, []);

  return (
    <div>
      <div className="container-fluid d-flex align-items-center p-4 bg-dark">
        <img src="./NS music.png" alt="NS Music Logo" width={85} />
        <div className="d-flex flex-grow-1">
          <Link to="/" className="btn btn-outline-light ms-auto">
            Back to Search
          </Link>
        </div>
      </div>

      <div className="container m-4">
        {favorites.length === 0 ? (
          <div className="alert alert-info" role="alert">
            You have no favorite songs. Start adding some from the search page!
          </div>
        ) : (
          <div className="row">
            {favorites.map((track, index) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaHeart } from 'react-icons/fa'; // Import the heart icon from react-icons/fa

const Header = () => {
  return (
    <div className="container-fluid d-flex align-items-center p-4 bg-dark">
      <a className="navbar-brand text-white me-4" href="#">
        Navbar
      </a>
      <div className="d-flex flex-grow-1">
        <input
          className="form-control me-2 flex-grow-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      {/* Add the Favorite Icon */}
      <div className="ms-3">
        <Link to="/favorites" className="text-white">
          <FaHeart size={24} /> {/* Favorite Icon */}
        </Link>
      </div>
      </div>
      
    </div>
  );
}

export default Header;

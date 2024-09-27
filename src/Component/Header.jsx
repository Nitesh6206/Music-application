import React from 'react';

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
      </div>
    </div>
  );
}

export default Header;

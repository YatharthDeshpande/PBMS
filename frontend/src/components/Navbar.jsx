import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ borderBottom: '2px solid white' }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9723/9723808.png"
              alt="Logo"
              style={{ width: '40px', marginRight: '10px' }}
            />
            PBMS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-white" to={'/'}>
                Home
              </Link>
              <Link className="nav-item nav-link active text-white" to={'/books'}>
                Books
              </Link>
              <Link className="nav-item nav-link active text-white" to={'/addBooks'}>
                Add Books
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

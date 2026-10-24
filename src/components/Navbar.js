import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        <Link className="navbar-brand salon-brand" to="/">
          Glow Beauty Salon
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
  <Link className="nav-link nav-link-custom" to="/packages">
    Packages
  </Link>
</li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom profile-nav-link" to="/profile">
                <span aria-hidden="true">♙</span> My Profile
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
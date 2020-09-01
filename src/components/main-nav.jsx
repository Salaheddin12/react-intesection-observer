import React from "react";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Another page
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Pricing
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

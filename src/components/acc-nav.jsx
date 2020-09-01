import React from 'react';

const AccNav = () => {
    return (
        <nav className="account">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__link nav__link--btn" href="#">
              Login
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className="nav__link nav__link--btn nav__link--btn--highlight"
              href="#"
            >
              Join
            </a>
          </li>
        </ul>
      </nav>
    );
};

export default AccNav;
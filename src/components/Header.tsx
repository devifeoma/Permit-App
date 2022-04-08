import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="" className="icon">
        <img src="assets/img/hamburg__menu.png" />
      </a>
      <h1>
        <a href="/">
          <span className="logo__design">Building </span>Permit App
        </a>
      </h1>
      <div className="header__link">
        <ul>
          <li>
            <a href="/" className="button">
              Home
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

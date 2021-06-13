import React, { useState } from "react";

function Header() {
  const [header, setHeader] = useState("show");
  return (
    <header className={header}>
      <nav className="nav">
        <a href="#home">
          <div className="diamond">
            <h1>BLF</h1>
          </div>
        </a>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

function Header({ header }) {
  return (
    <header className="navHeader">
      <nav className={header}>
        <a href="#hero" className="logo">
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

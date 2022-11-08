import brandLogo from "../assets/images/makeup-logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/#">
            <img src={brandLogo} alt="Logo" />
          </a>
          <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active" href="/#">
              Home
            </a>
            <a className="navbar-item" href="/#">
              Examples
            </a>
            <a className="navbar-item" href="/#">
              Documentation
            </a>
            <span className="navbar-item">
              <a className="button is-success is-inverted" href="/#">
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

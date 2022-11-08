import brandLogo from "../assets/images/makeup-logo.png";

export default function Navbar() {
  return (
    <header className="navbar is-fixed-top">
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
            <a className="navbar-item is-active" href="/eyes">
              Eyes
            </a>
            <a className="navbar-item" href="/lips">
              Lips
            </a>
            <a className="navbar-item" href="/face">
              Face
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

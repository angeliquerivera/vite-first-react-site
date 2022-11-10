import { useState } from "react";
import brandLogo from "../assets/images/makeup-logo.png";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/#">
            <img src={brandLogo} alt="Logo" />
          </a>
          <a
            role="button"
            className={isActive ? "navbar-burger is-active" : "navbar-burger"}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => {
              setIsActive((state) => !state);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarMenuHeroC"
          className={isActive ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-end">
            <a className="navbar-item" href="/eyes">
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

export default function Hero() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <header className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/#">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" />
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
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-1">Title</h1>
          <h2 className="subtitle is-size-3">Subtitle</h2>
        </div>
      </div>
    </section>
  );
}

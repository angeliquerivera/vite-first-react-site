import Navbar from "./Navbar";
export default function Hero() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Navbar />
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="hero-title">Bougie Boutique</h1>
          <button className="button is-black is-medium is-active">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

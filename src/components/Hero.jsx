import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Navbar />
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

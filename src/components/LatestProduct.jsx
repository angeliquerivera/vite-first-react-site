import newMakeupLine from "../assets/images/new-makeup-line.jpg";

export default function LatestProduct() {
  return (
    <section className="section latest-product">
      <div className="columns">
        <div className="column">
          <figure className="image is-128by128">
            <img src={newMakeupLine} />
          </figure>
        </div>

        <div className="column content is-large">
          <h1 className="title">Autumn Boheme</h1>
          <p>Our latest fall line up has arrived!</p>
          <button className="button is-info is-light is-medium is-active">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}

import collectionOne from "../assets/images/collection-1.jpg";
import collectionTwo from "../assets/images/collection-2.jpg";
import collectionThree from "../assets/images/collection-3.jpg";
import collectionFour from "../assets/images/collection-4.jpg";

export default function MakeupCollections() {
  return (
    <section className="section is-large collections">
      <h1 className="title">Collections For Your Inner Diva</h1>
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img src={collectionOne} />
          </figure>
        </div>

        <div className="column">
          <figure className="image">
            <img src={collectionTwo} />
          </figure>
        </div>
        <div className="column">
          <figure className="image">
            <img src={collectionThree} />
          </figure>
        </div>
        <div className="column">
          <figure className="image">
            <img src={collectionFour} />
          </figure>
        </div>
      </div>
    </section>
  );
}

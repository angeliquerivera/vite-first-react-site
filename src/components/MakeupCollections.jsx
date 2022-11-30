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
          <h1 className="palette-name">Shine Bright</h1>
          <p className="price">$20</p>
        </div>

        <div className="column">
          <figure className="image">
            <img src={collectionTwo} />
          </figure>
          <h1 className="palette-name">OmniLook</h1>
          <p className="price">$40</p>
        </div>
        <div className="column">
          <figure className="image">
            <img src={collectionThree} />
          </figure>
          <h1 className="palette-name">Shimmer 'n Simmer</h1>
          <p className="price">$20</p>
        </div>
        <div className="column">
          <figure className="image">
            <img src={collectionFour} />
          </figure>
          <h1 className="palette-name">Teen Drama</h1>
          <p className="price">$15</p>
        </div>
      </div>
    </section>
  );
}

import collectionOne from "../assets/images/collection-1.jpg";
import collectionTwo from "../assets/images/collection-2.jpg";
import collectionThree from "../assets/images/collection-3.jpg";
import collectionFour from "../assets/images/collection-4.jpg";

export default function MakeupCollections() {
  return (
    <section className="section is-medium collections">
      <h1 className="title">Collections For Your Inner Diva</h1>
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img src={collectionOne} />
          </figure>
          <div className="collection-details">
            <h1 className="palette-name">Shine Bright</h1>
            <p className="price">$20</p>
            <button className="buy button is-info is-active">Buy</button>
          </div>
        </div>

        <div className="column">
          <figure className="image">
            <img src={collectionTwo} />
          </figure>
          <div className="collection-details">
            <h1 className="palette-name">OmniLook</h1>
            <p className="price">$40</p>
            <button className="buy button is-info is-active">Buy</button>
          </div>
        </div>

        <div className="column">
          <figure className="image">
            <img src={collectionThree} />
          </figure>
          <div className="collection-details">
            <h1 className="palette-name">Shimmer 'n Simmer</h1>
            <p className="price">$20</p>
            <button className="buy button is-info is-active">Buy</button>
          </div>
        </div>

        <div className="column">
          <figure className="image">
            <img src={collectionFour} />
          </figure>
          <div className="collection-details">
            <h1 className="palette-name">Teen Drama</h1>
            <p className="price">$15</p>
            <button className="buy button is-info is-active">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
}

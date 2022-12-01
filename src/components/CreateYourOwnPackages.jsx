import packageItemOne from "../assets/images/diy-1.jpg";
import packageItemTwo from "../assets/images/diy-2.jpg";
import packageItemThree from "../assets/images/diy-3.jpg";
import packageItemFour from "../assets/images/diy-4.jpg";
import packageItemFive from "../assets/images/diy-5.jpg";
import Elegance from "../assets/images/elegance.jpg";

export default function CreateYourOwnPackages() {
  return (
    <section>
      <header className="section is-large create-package">
        <h1 className="title">Create Your Own Lewk and Serve!</h1>
        <p className="subtitle">
          Mix and match from any line to create a unique and bold statement
        </p>
        <div className="columns">
          <div className="column">
            <figure className="image">
              <img src={packageItemOne} />
            </figure>
            <h1>Blush</h1>
          </div>
          <div className="column is-narrow">
            <span className="plus-symbol">+</span>
          </div>
          <div className="column">
            <figure className="image">
              <img src={packageItemTwo} />
            </figure>
            <h1>Eyeshadow</h1>
          </div>

          <div className="column is-narrow">
            <span className="plus-symbol">+</span>
          </div>
          <div className="column">
            <figure className="image">
              <img src={packageItemThree} />
            </figure>
            <h1>Lashes</h1>
          </div>

          <div className="column is-narrow">
            <span className="plus-symbol">+</span>
          </div>
          <div className="column">
            <figure className="image">
              <img src={packageItemFour} />
            </figure>
            <h1>Lip Color</h1>
          </div>

          <div className="column is-narrow">
            <span className="plus-symbol">+</span>
          </div>
          <div className="column">
            <figure className="image">
              <img src={packageItemFive} />
            </figure>
            <h1>Brushes</h1>
          </div>
          <div className="column is-narrow">
            <span className="equal-sign">=</span>
          </div>
          <div className="column">
            <figure className="image">
              <img src={Elegance} />
            </figure>
          </div>
        </div>
      </header>
    </section>
  );
}

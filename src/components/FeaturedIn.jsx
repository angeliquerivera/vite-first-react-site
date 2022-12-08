import Glamour from "../assets/logos/glamour-logo.png";
import Elle from "../assets/logos/elle-logo.png";
import Allure from "../assets/logos/allure-logo.png";
import Vogue from "../assets/logos/vogue-logo.png";

export default function FeaturedIn() {
  return (
    <section className="section is-medium featured-in">
      <h1 className="title">Featured In</h1>
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img src={Glamour} />
          </figure>
        </div>
        <div className="column">
          <figure className="image">
            <img src={Elle} />
          </figure>
        </div>
        <div className="column">
          <figure className="image">
            <img src={Allure} />
          </figure>
        </div>
        <div className="column">
          <figure className="image">
            <img src={Vogue} />
          </figure>
        </div>
      </div>
    </section>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <div className="columns is-centered">
          <div className="column icon-column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </span>
          </div>
          <div className="column icon-column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </span>
          </div>
          <div className="column icon-column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </span>
          </div>
          <div className="column icon-column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faTiktok} size="4x" />
            </span>
          </div>
          <div className="column icon-column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faYoutube} size="4x" />
            </span>
          </div>
          <div className="column has-text-centered">
            <ul>
              <h3 className="title">Shop</h3>
              <li>
                <a href="/eyes">Eyes</a>
              </li>
              <li>
                <a href="/lips">Lips</a>
              </li>
              <li>
                <a href="/face">Face</a>
              </li>
            </ul>
          </div>
          <div className="column has-text-centered">
            <ul>
              <h3 className="title">About</h3>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/shipping">Shipping & Returns</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

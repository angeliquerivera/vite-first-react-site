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
          <div className="column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </span>
          </div>
          <div className="column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </span>
          </div>
          <div className="column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </span>
          </div>
          <div className="column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faTiktok} size="4x" />
            </span>
          </div>
          <div className="column is-narrow">
            <span className="icon is-large">
              <FontAwesomeIcon icon={faYoutube} size="4x" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        Comitted to the pursuit of knowledge and the empowerment of individuals,
        our institution stands as a beacon of learning and inspiration. We are
        on a mission to nurture inquisitive minds, encourage creativity, and
        drive positive change. Our dedicated team strives to provide a
        supportive learning environment that fosters personal growth and
        academic ecellence. Join us on a journey of discovery, where education
        transcends boundaries and transforms lives.
      </p>

      <div className="icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebookF} className="fab" />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} className="fab" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className="fab" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
  </a>
</div>

    </section>
  );
};

export default Footer;

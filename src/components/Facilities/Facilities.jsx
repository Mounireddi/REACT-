import { Link } from "react-router-dom";
import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Immerse yourself in a world of exceptional amenities and services.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/Faculity.png" alt="" />
          <h3>
            <Link to="/faculity">Faculity</Link>
          </h3>
          <p>
            Dive into a sea of knowledge with our state-of-the-Education. An
            oasis for intellectual exploration.
          </p>
        </div>
        <div className="facilities-col">
          <img src="\images\Extra-circular.png.jpg" alt="" />
          <h3>
            <Link to="/Extracurricularactivities">Extracurricularactivities</Link>
          </h3>
          <p>
            Unleash your energy on our Faculty. "Engineering is the closest
            thing to magic that exists in the world," serves as a nice engineering
            quote that celebrates the field's transformative power. It encapsulates
            the idea that engineering is not just a technical pursuit, but an
            extraordinary one, capable of achieving what may seem impossible.
          </p>
        </div>
        <div className="facilities-col">
          <img src="\images\Techinical-Activities.png" alt="" />
          <h3>
            <Link to="/Technical-Activites">Technical-Activities</Link>
          </h3>
          <p>
            "A good scientist is a person with original ideas. A good engineer is
            a person who makes a design that works with as few original ideas as
            possible."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;

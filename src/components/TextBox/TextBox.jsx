import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1 className="Textbox-h1">Welcome To Eduford Institution</h1>
      <p>
      Eduford Institution is a gateway to a brighter future<br></br>
      Let&apos;s build a better future together
      </p>
      <Link to="/CollegeAchievements" className="hero-btn">
        Visit us To Know More
      </Link>
    </div>
  );
};

export default TextBox;

import React, { useState } from "react";
import "./AboutUsBox.css";

const AboutUsBox = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which section is expanded

  const content = [
    {
      title: "Successful Journey of Eduford Institution",
      description:
        "With a mission to make education accessible to rural communities, Eduford Institution has established itself as a beacon of excellence. From consistent academic results to outstanding placements, the college has earned a distinguished reputation among educational institutions.",
      image: "images/sucess1.jpeg",
      video: "videos/success.mp4",
    },
    {
      title: "State-of-the-Art Infrastructure",
      description:
        "The college campus is equipped with modern facilities, including well-designed classrooms, advanced computer centers, and spacious seminar halls. These facilities support a vibrant learning environment and foster innovation and creativity.",
      image: "images/infra1.jpeg",
      video: "videos/infrastructure.mp4",
    },
    {
      title: "Cutting-Edge Laboratories",
      description:
        "Eduford Institution boasts state-of-the-art laboratories for hands-on learning in various fields of engineering and technology. Each lab is equipped with the latest tools and technologies to ensure students gain practical exposure and real-world skills.",
      image: "images/lab1.jpeg",
      video: "videos/labs.mp4",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle section
  };

  return (
    <section className="about-us">
      <header className="about-header">
        <h1>Welcome to Eduford Institution</h1>
        <p>
          Eduford Institution, College of Engineering, Pulivendula, is dedicated
          to empowering rural communities through affordable and accessible
          technical education.
        </p>
      </header>
      <div className="about-content">
        {content.map((item, index) => (
          <div className="about-section" key={index}>
            <div className={`about-col ${index % 2 === 0 ? "reverse" : ""}`}>
              <div className="text-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="hero-btn"
                >
                  {expandedIndex === index ? "HIDE DETAILS" : "EXPLORE NOW"}
                </button>
              </div>
              <div className="media-content">
                <img
                  src={item.image}
                  alt={item.title}
                  className="about-image"
                />
                {item.video && (
                  <video
                    src={item.video}
                    controls
                    className="about-video"
                  ></video>
                )}
              </div>
            </div>
            {expandedIndex === index && (
              <div className="expanded-content">
                <p>{item.description}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="expanded-image"
                />
                {item.video && (
                  <video
                    src={item.video}
                    controls
                    className="expanded-video"
                  ></video>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsBox;

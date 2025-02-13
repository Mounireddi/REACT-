import React from "react";
import "./Syllabus.css"; // Add CSS for styling

const Syllabus = () => {
  const syllabusData = [
    {
      title: "Computer Science",
      description: "Programming, AI & ML, Web Development",
      image: "computer-science.jpg",
      video: "computer-science.mp4",
    },
    {
      title: "Civil Engineering",
      description: "Structural Analysis, Project Management",
      image: "civil-engineering.jpg",
      video: "civil-engineering.mp4",
    },
    {
      title: "Mechanical Engineering",
      description: "Thermodynamics, CAD/CAM",
      image: "mechanical-engineering.jpg",
      video: "mechanical-engineering.mp4",
    },
    {
      title: "Electrical Engineering",
      description: "Circuits, Power Systems",
      image: "electrical-engineering.jpg",
      video: "electrical-engineering.mp4",
    },
    {
      title: "Electronics",
      description: "Microprocessors, VLSI",
      image: "electronics.jpg",
      video: "electronics.mp4",
    },
  ];

  return (
    <div className="syllabus-page">
      <header className="heading">
        <h1>Our Syllabus</h1>
        <p>
          We offer a comprehensive and updated syllabus for all our programs,
          ensuring students gain the most relevant knowledge and skills.
        </p>
      </header>
      <div className="syllabus-container">
        {syllabusData.map((item, index) => (
          <div className="syllabus-card" key={index}>
            <div className="media">
              <img
                src={item.image}
                alt={item.title}
                className="syllabus-image"
              />
              <video
                src={item.video}
                controls
                className="syllabus-video"
              ></video>
            </div>
            <h2 className="syllabus-title">{item.title}</h2>
            <p className="syllabus-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;

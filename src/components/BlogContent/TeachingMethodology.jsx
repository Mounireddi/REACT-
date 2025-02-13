import React from "react";
import "./TeachingMethodology.css"; // Add your CSS here for styling

const TeachingMethodology = () => {
  const methodologies = [
    {
      title: "Interactive Lectures",
      description:
        "Engaging lectures designed to foster participation and understanding.",
      image: "interactive-lectures.jpg",
      video: "interactive-lectures.mp4",
    },
    {
      title: "Hands-on Lab Sessions",
      description:
        "Practical sessions to ensure thorough understanding of concepts.",
      image: "hands-on-labs.jpg",
      video: "hands-on-labs.mp4",
    },
    {
      title: "Group Discussions and Case Studies",
      description:
        "Collaborative discussions and real-world case studies for better learning.",
      image: "group-discussions.jpg",
      video: "group-discussions.mp4",
    },
    {
      title: "Industry Expert Webinars",
      description:
        "Learn from the best in the industry through webinars and guest lectures.",
      image: "industry-webinars.jpg",
      video: "industry-webinars.mp4",
    },
    {
      title: "Live Projects and Internships",
      description:
        "Gain hands-on experience with live projects and internships.",
      image: "live-projects.jpg",
      video: "live-projects.mp4",
    },
  ];

  return (
    <div className="teaching-methodology">
      <header className="heading">
        <h1>Our Teaching Methodology</h1>
        <p style={{color:'black'}}>
          Our teaching approach combines theoretical knowledge with practical
          applications.
        </p>
      </header>
      <div className="methodologies">
        {methodologies.map((method, index) => (
          <div className="methodology-card" key={index}>
            <div className="media">
              <img
                src={method.image}
                alt={method.title}
                className="method-image"
              />
              <video
                src={method.video}
                controls
                className="method-video"
              ></video>
            </div>
            <h2 className="method-title">{method.title}</h2>
            <p className="method-description">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachingMethodology;

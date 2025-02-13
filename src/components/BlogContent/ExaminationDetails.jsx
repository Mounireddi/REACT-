import React from "react";
import "./ExaminationDetails.css"; // Ensure this file exists and has styles

const ExaminationDetails = () => {
  const examDetails = [
    {
      title: "Continuous Assessment",
      description: "Weekly assignments and quizzes for ongoing evaluation.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      video: "", // Placeholder video
    },
    {
      title: "Mid-Semester Exams",
      description: "Practical and theory assessments conducted mid-term.",
      image: "https://via.placeholder.com/300x200",
      video: "",
    },
    {
      title: "End-Semester Exams",
      description: "Comprehensive theory and viva voce at the end of the term.",
      image: "https://via.placeholder.com/300x200",
      video: "",
    },
    {
      title: "Project Evaluation",
      description: "Individual and group projects to assess applied knowledge.",
      image: "https://via.placeholder.com/300x200",
      video: "",
    },
  ];

  console.log(examDetails); // Debugging output

  return (
    <div className="exam-details-page" style={{ background: "white" }}>
      <header className="heading">
        <h1>Examination Details</h1>
        <p>
          Our examination system ensures a holistic evaluation of students'
          knowledge and skills.
        </p>
      </header>
      <div className="exam-details-container">
        {examDetails.map((detail, index) => (
          <div className="exam-card" key={index}>
            <div className="media">
              <img
                src={detail.image}
                alt={detail.title}
                className="exam-image"
              />
              {detail.video && (
                <video
                  src={detail.video}
                  controls
                  className="exam-video"
                ></video>
              )}
            </div>
            <h2 className="exam-title">{detail.title}</h2>
            <p className="exam-description">{detail.description}</p>
          </div>
         
        ))}
        
      </div>
    </div>
  );
};

export default ExaminationDetails;

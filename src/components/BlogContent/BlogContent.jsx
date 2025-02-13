import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogContent.css";

// Image Slideshow Component
const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow">
      <button className="slideshow-btn prev" onClick={prevImage}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="Slideshow" />
      <button className="slideshow-btn next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

// Comment Section Component
const CommentSection = ({ comments, handleCommentSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCommentSubmit({ name, email, comment });
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="comment-box">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          rows="5"
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          POST COMMENT
        </button>
      </form>
      <div className="comments-list">
        {comments.length > 0 && (
          <div>
            <h4>Comments</h4>
            <ul>
              {comments.map((c, index) => (
                <li key={index}>
                  <strong>{c.name}</strong> <em>({c.email})</em>
                  <p>{c.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Teaching Methodology Component
const TeachingMethodology = () => (
  <section className="teaching-methodology">
    <Link to='/TeachingMethodology'><h2>Teaching Methodology</h2></Link>
    <p>
      Our teaching approach combines theoretical knowledge with practical applications. We Faculty:
    </p>
    
  </section>
);

// Syllabus Component
const Syllabus = () => (
  <section className="syllabus">
   <Link to='/Syllabus'><h2>Syllabus</h2></Link>
    <p>
      We offer comprehensive and updated syllabus for all our programs:
    </p>
    
  </section>
);

//Examination component
const ExaminationDetails = () => (
  <section className="ExaminationDetails">
<Link to='/ExaminationDetails'><h2>ExaminationDetails</h2></Link>
    <p>
      Our examination system ensures holistic evaluation:
    </p>
    
  </section>
);

const BlogContent = () => {
  const [comments, setComments] = useState([]);
  const [images] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtXE06_iszoce_E-zJCCyfiFZutLAo8mE-A&s",
    "https://media.istockphoto.com/id/914314318/photo/young-man-using-laptop-with-female-student-watching-and-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=ARxBlm4ldXFGUQsLmTzq9Hmq1LzUPfJOR0Cja5K0a1c=",
    "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/155443881/photo/indian-professor-teaching-students-microscopy.webp?a=1&b=1&s=612x612&w=0&k=20&c=XKym8MYJ9kdhUUurECILuvt8bKA1DWAN7E73AcPfy5U=",
  ]);

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <section className="blog-content">
      <header className="blog-header">
        <h1>Our Certificate & College Programs</h1>
        <p>Explore our diverse range of programs tailored and beyond!</p>
      </header>

      <div className="row">
        <div className="blog-left">
          <ImageSlideshow images={images} />

          <h2>Discover a World of Opportunities</h2>
          <p>
            Our institution is dedicated to providing enriching educational experiences that empower individuals for success.
          </p>
          <TeachingMethodology />
          <Syllabus />
          <ExaminationDetails />

          {/* Comment Section */}
          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea rows="5" placeholder="Your comment"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
          </div>

        <div className="blog-right">
          <h3>Our Educational Courses</h3>
          <div>
            <span>BI.P.C</span>
            <span>90</span>
          </div>
          <div>
            <span>M.E.C</span>
            <span>120</span>
          </div>
          <div>
            <span>M.P.C</span>
            <span>150</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>120</span>
          </div>
          <div>
            <span>Civil Engineering</span>
            <span>120</span>
          </div>
          <div>
            <span>Mechanical Engineering</span>
            <span>120</span>
          </div>
          <div>
            <span>Electrical Engineering</span>
            <span>120</span>
          </div>
          <div>
            <span>Electronic Engineering</span>
            <span>120</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;

import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>
        Explore our diverse range of courses designed to enhance your learning
        experience.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Intermediate</h3>
          <p>
            Acquire intermediate skills with our comprehensive courses. Discover
            new horizons in your educational journey.<br></br>
            (M.P.C, M.E.C, BI.P.C)
          </p>
        </div>
        <div className="course-col">
          <h3>Bachelor of Degree</h3>
          <p>
            Pursue a Bachelor of degree that aligns with your passion and career goals.
            Unleash your potential and excel in your chosen field.<br></br>
            (C.E, C.S.E, E.C.E, E.E.E, M.E)
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Courses;

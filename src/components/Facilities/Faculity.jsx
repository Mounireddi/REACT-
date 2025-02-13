import React, { useState } from "react";
import "./Faculity.css";
import { Link } from "react-router-dom";
const App = () => {
  const facultyData = [
    {
      name: "B.Harshitha",
      subject: "Sanskrit",
      qualification: "Ph.D Sanskrit",
      image: "images/18.png",
      category: "Intermediate",
      department: "MPC,BIPC,MEC",
    },
    {
      name: "A.Saranya",
      subject: "English",
      qualification: "Ph.D English",
      image: "images/19.png",
      category: "Intermediate",
      department: "MPC,BIPC,MEC",
    },
    {
      name: "B.Bhashvika",
      subject: "Mathematics",
      qualification: "Masters degree in Mathematics",
      image: "images/20.png",
      category: "Intermediate",
      department: "MPC,MEC",
    },
    {
      name: "D.Gunavarshitha",
      subject: "Physics",
      qualification: "Ph.D Physics",
      image: "images/21.png",
      category: "Intermediate",
      department: "MPC,BIPC",
    },
    {
      name: "K.Jashwanth",
      subject: "Botony",
      qualification: "Masters in Botany",
      image: "images/01.png.jpg",
      department: "BIPC",
    },
    {
      name: "B.Anil",
      subject: "Economics",
      qualification: "Ph.D Economics",
      image: "images/2.png",
      category: "Intermediate",
      department: "Mec",
    },
    {
      name: "K.Venkatesh",
      subject: "Commerce",
      qualification: "Ph.D Commerce",
      image: "images/3.png",
      category: "Intermediate",
      department: "Mec",
    },
    {
      name: "S.Althaf",
      subject: "Chemistry",
      qualification: "Ph.D Chemistry",
      image: "images/4.png",
      category: "Intermediate",
      department: "MPC,BIPC",
    },
    {
      name: "Sneha Latha",
      subject: "Zoology",
      qualification: "Masters in Zoology",
      image: "images/22.png",
      category: "Intermediate",
      department: "BIPC",
    },
    {
      name: "N.Supriya",
      subject: "Programming",
      qualification: "Ph.D in CS",
      image: "images/23.png",
      category: "B.Tech",
      department: "CSE",
    },
    {
      name: "A.Mounika",
      subject: "DBMS",
      qualification: "Master Degree in CS",
      image: "images/24.png",
      category: "B.Tech",
      department: "CSE",
    },
    {
      name: "D.Sneha",
      subject: "AI & ML",
      qualification: "Ph.D in CS",
      image: "images/25.png",
      category: "B.Tech",
      department: "CSE",
    },
    {
      name: "D.Tarun",
      subject: "Cloud Computing",
      qualification: "Master Degree in CS",
      image: "images/5.png",
      category: "B.Tech",
      department: "CSE",
    },
    {
      name: "C.Venkata Sankar",
      subject: "Operating System",
      qualification: "Master Degree in CS,Ph.D in CS",
      image: "images/06.jpg",
      category: "B.Tech",
      department: "CSE",
    },
    {
      name: " Naredra Tagore",
      subject: "Engineering Graphics",
      qualification: "M.Tech",
      image: "images/7.png",
      category: "B.Tech",
      department: "Civil",
    },
    {
      name: "CH.Prasanna",
      subject: "Economics & MEFA",
      qualification: "M.Tech",
      image: "images/25.png",
      category: "B.Tech",
      department: "Civil",
    },
    {
      name: "G.Kaveri",
      subject: "Economics & MEFA",
      qualification: "M.Tech",
      image: "images/26.png",
      category: "B.Tech",
      department: "Civil",
    },
    {
      name: "C.Aravind Reddy",
      subject: "Economics & MEFA",
      qualification: "Ph.D in CE",
      image: "images/8.png",
      category: "B.Tech",
      department: "Civil",
    },
    {
      name: "D.Siva",
      subject: "Economics & MEFA",
      qualification: "Ph.D in Economics",
      image: "images/9.png",
      category: "B.Tech",
      department: "Civil",
    },
    {
      name: "P.Sukumar",
      subject: "Digital Electronics",
      qualification: "M.Tech in ECE",
      image: "images/10.png",
      category: "B.Tech",
      department: "ECE",
    },
    {
      name: "N.Manisha",
      subject: "VLSI Design",
      qualification: "M.Tech in ECE",
      image: "images/27.png",
      category: "B.Tech",
      department: "ECE",
    },
    {
      name: "N.Deepika",
      subject: "Analog Electronics",
      qualification: "M.Tech in ECE",
      image: "images/28.png",
      category: "B.Tech",
      department: "ECE",
    },
    {
      name: "E.Puneeth",
      subject: "Embedded Systems",
      qualification: "M.Tech in ECE",
      image: "images/12.png",
      category: "B.Tech",
      department: "ECE",
    },
    {
      name: "K.Purshotham Naidu",
      subject: "Micro Controllers",
      qualification: "M.Tech in ECE",
      image: "images/11.png",
      category: "B.Tech",
      department: "ECE",
    },
    {
      name: "M.Mahesh Babu",
      subject: "Electrical Machines",
      qualification: "Ph.D in Electrics",
      image: "images/013.jpg",
      category: "B.Tech",
      department: "EEE",
    },
    {
      name: "R.Swetha",
      subject: "Power Systems",
      qualification: "M.Tech in EEE",
      image: "images/29.png",
      category: "B.Tech",
      department: "EEE",
    },
    {
      name: "K.Geethika",
      subject: "Control Systems",
      qualification: "M.Tech in EEE",
      image: "images/30.png",
      category: "B.Tech",
      department: "EEE",
    },
    {
      name: "K.Varun ",
      subject: "Semi-Conducter device",
      qualification: "M.Tech in EEE",
      image: "images/14.png",
      category: "B.Tech",
      department: "EEE",
    },
    {
      name: "N.Harshanvitha",
      subject: "Electric Vehicles",
      qualification: "Ph.D in Electrics",
      image: "images/31.png",
      category: "B.Tech",
      department: "EEE",
    },
    {
      name: "G.Mohitheswar",
      subject: "Robotics & programming",
      qualification: "M.Tech in Robotics",
      image: "images/15.png",
      category: "B.Tech",
      department: "MEC",
    },
    {
      name: "M.Rajasekhar",
      subject: "Solid MEchanics",
      qualification: "M.Tech in ME",
      image: "images/17.png",
      category: "B.Tech",
      department: "MEC",
    },
    {
      name: "K.Ganesh Reddy",
      subject: "Thermodynamics",
      qualification: "M.Tech in ME",
      image: "images/16.png",
      category: "B.Tech",
      department: "MEC",
    },
    {
      name: "K.Shafiya",
      subject: "Automotive Systems",
      qualification: "M.Tech in ME",
      image: "images/34.png",
      category: "B.Tech",
      department: "MEC",
    },
    {
      name: "Y.Bhavya",
      subject: "CAD & Finite Element Analysis",
      qualification: "Ph.D in ME",
      image: "images/33.png",
      category: "B.Tech",
      department: "MEC",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedDepartment("All"); // Reset department filter when category changes
  };

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  const filteredFaculty = facultyData.filter((faculty) => {
    const matchesCategory =
      selectedCategory === "All" || faculty.category === selectedCategory;
    const matchesDepartment =
      selectedDepartment === "All" || faculty.department === selectedDepartment;
    const matchesSearchTerm =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.qualification.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDepartment && matchesSearchTerm;
  });

  return (
    <div className="app">
      
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search faculty by name, subject, or qualification..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="category-buttons">
          <button
            className={`nav-button ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => handleCategoryChange("All")}
          >
            All Faculty
          </button>
          <button
            className={`nav-button ${selectedCategory === "Intermediate" ? "active" : ""}`}
            onClick={() => handleCategoryChange("Intermediate")}
          >
            Intermediate Faculty
          </button>
          <button
            className={`nav-button ${selectedCategory === "B.Tech" ? "active" : ""}`}
            onClick={() => handleCategoryChange("B.Tech")}
          >
            B.Tech Faculty
          </button>
        </div>
        <div className="department-buttons">
                   <button
            className={`nav-button ${selectedDepartment === "CSE" ? "active" : ""}`}
            onClick={() => handleDepartmentChange("CSE")}
          >
            CSE
          </button>
          <button
            className={`nav-button ${selectedDepartment === "Civil" ? "active" : ""}`}
            onClick={() => handleDepartmentChange("Civil")}
          >
            Civil
          </button>
          <button
            className={`nav-button ${selectedDepartment === "ECE" ? "active" : ""}`}
            onClick={() => handleDepartmentChange("ECE")}
          >
            ECE
          </button>
          <button
            className={`nav-button ${selectedDepartment === "EEE" ? "active" : ""}`}
            onClick={() => handleDepartmentChange("EEE")}
          >
            EEE
          </button>
          <button
            className={`nav-button ${selectedDepartment === "MEC" ? "active" : ""}`}
            onClick={() => handleDepartmentChange("MEC")}
          >
            MEC
          </button>
          <button
            className={`nav-button ${selectedDepartment === "All" ? "active" : ""}`}
            onClick={() => handleDepartmentChange("All")}
          >
            All Departments
          </button>

          
        </div>
      </nav>

      {/* Main Content */}
      <h1>Our Faculty Details</h1>
      <div className="faculty-list">
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map((faculty, index) => (
            <div className="faculty-card" key={index}>
              <img
                src={faculty.image}
                alt={`${faculty.name}`}
                className="faculty-image"
              />
              <div className="faculty-details">
                <h3>{faculty.name}</h3>
                <p>
                  <strong>Subject:</strong> {faculty.subject}
                </p>
                <p>
                  <strong>Qualification:</strong> {faculty.qualification}
                </p>
                <p>
                  <strong>Department:</strong> {faculty.department}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No faculty found for the selected filters.</p>
        )}
        
      </div>
      <div className="back_next_container"> 
       
         <Link to='/course' className="back_next_buttons">Back</Link>
       
         <Link to='/Extracurricularactivities' className="back_next_buttons">Next</Link>
       
      </div>

    </div>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import CollegeAchievements from "../components/achivements/achivements";
import Faculity from '../components/Facilities/Faculity';
import Extracurricularactivities from '../components/Facilities/Extracurricularactivities';
import Facilities from "../components/Facilities/Facilities";
import TechnicalActivities from "../components/Facilities/TechnicalActivities";
import TeachingMethodology from "../components/BlogContent/TeachingMethodology";
import Syllabus from "../components/BlogContent/Syllabus";
import ExaminationDetails from "../components/BlogContent/ExaminationDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* General Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/course" element={<Course />} />
      <Route path="/CollegeAchievements" element={<CollegeAchievements />} />

      {/* Facilities Routes */}
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/faculity" element={<Faculity />} />
      <Route path="/Technical-Activites" element={<TechnicalActivities />} />
      <Route path="/Extracurricularactivities"element={<Extracurricularactivities/>}/>
      <Route path="/TeachingMethodology" element={<TeachingMethodology />} />
      <Route path="/Syllabus" element={<Syllabus />} />
      <Route path="/ExaminationDetails" element={<ExaminationDetails/>}/>  
    </Routes>
  );
};

export default AppRoutes;

import React from 'react';
import './achivements.css';

const CollegeAchievements = () => {
  return (
    <div className="college-achievements">
      <h1>Institute Achievements</h1>

      {/* Awards Section */}
      <section className="section awards-section">
        <h2>Awards</h2>
        <p>We are proud to have won several prestigious awards that highlight our commitment to excellence.</p>
        <div className="image-grid">
          <img src="images/Award1.png" alt="Award 1" />
          <img src="images/Award2.png" alt="Award 2" />
          <img src="images/Award3.png" alt="Award 3" />
          <img src="images/Award4.png" alt="Award 4" />
          <img src="images/Award5.png" alt="Award 5" />
          <img src="images/Award6.png" alt="Award 6" />
          <img src="images/Award7.png" alt="Award 7" />
          <img src="images/Award8.png" alt="Award 8" />
          <img src="images/Award9.png" alt="Award 9" />
          <img src="images/Award10.png" alt="Award 10" />
          
        </div>
      </section>

      {/* Placements Section */}
      <section className="section placements-section">
        <h2>Placements</h2>
        <p>Our students have achieved success by securing positions in top global companies.</p>
        <div className="image-grid">
          <img src="images/Placement1.png" alt="Company 1" />
          <img src="images/Placement2.png" alt="Company 2" />
          <img src="images/Placement3.png" alt="Company 3" />
          <img src="images/Placement4.png" alt="Company 4" />
          <img src="images/Placement5.png" alt="Company 5" />
        </div>
      </section>

      {/* Library Section */}
      <section className="section library-section">
        <h2>Library</h2>
        <p>A well-stocked library with resources for all academic and research pursuits.
        The Central Library supports the teaching and research programmes of the Institute and provides facilities for general reading and disseminates information according to the requirement of the users. It is housed in a separate building with a carpet area of 2147Sq.ms, reading space 395.87 sq.ms. It has around 18000 including , books, back volumes of technical national and international journals, technical pamphlets, standards, CD-ROMs, Video cassettes etc. The database of entire library acquisitions was created using Library Application Software Called SOUL software.

The College Central Library caters to the needs of the user community i.e., UG and PG students, Research scholars, staff and faculty of the Jawaharlal Nehru technological University college of Engineering (Autonomous), Pulivendula. The College Central Library was fully automated with bar coding of the books from the year 2006 SOUL Library Software package. The main features of the SOUL Software are OPAC, Acquisition, Cataloguing, Circulation, Serial Control etc.

        </p>
        <div className="image-grid">
          <img src="images/library1.png" alt="Library 1" />
          <img src="images/library2.png" alt="Library 2" />
          <img src="images/library3.png" alt="Library 3"/>
          <img src="images/library4.png" alt="Library 4"/>
          <img src="images/library5.png" alt="Library 5"/>
        </div>
        <p>Working Hours
        The library is kept open throughout the year except for six days i.e., three national holidays and three festival holidays.It is kept open from 9.00 A.M. To 8.00 P.M on all working days and 10.00 A.M. to 4.00 P.M. On holidays.</p>
      </section>

      {/* Canteen Section */}
      <section className="section canteen-section">
        <h2>Canteen</h2>
        <p>Our modern canteen serves hygienic and nutritious meals for students and staff.</p>
        <div className="image-grid">
          <img src="images/canteen1.png" alt="Canteen 1" />
          <img src="images/canteen2.png" alt="Canteen 2" />
          <img src="images/canteen3.png" alt="Canteen 3" />
          <img src="images/canteen4.png" alt="Canteen 4" />
          <img src="images/canteen5.png" alt="Canteen 5" />
        </div>
      </section>
  

      {/* Playground Section */}
      <section className="section playground-section">
        <h2>Playground</h2>
        <p>Enjoy a state-of-the-art playground equipped for various sports and recreational activities.</p>
        <div className="image-grid">
          <img src="images/playground1.png" alt="Playground 1" />
          <img src="images/Playground2.png" alt="Playground 2" />
          <img src="images/playground3.png" alt="Playground 3" />
          <img src="images/playground4.png" alt="Playground 4" />
          <img src="images/playground5.png" alt="Playground 5" />
        </div>
        <p>The institution has a huge sports ground. There are well equipped gym and sports kits. Students are encouraged to participate in various zonal and inter-zonal tournaments. Students are provided with various sports kits and equipments. They participate in inter collegiate and inter University matches. Sports Day is celebrated every year with various sports events like Long Jump, Volleyball, Table Tennis, Cricket, Chess and Carom etc.</p>
      </section>

      </div>

      
  );
};

export default CollegeAchievements;

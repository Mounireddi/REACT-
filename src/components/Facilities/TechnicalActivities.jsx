import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPlayer from 'react-player';
import './Techinicalactivities.css';
import { Link } from 'react-router-dom';
const TechnicalActivities = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Example media data with placeholders
  const media = [
    { id: 1, type: 'image', category: 'workshop', src: 'images/workshop1.png', alt: 'Workshop 1' },
    { id: 2, type: 'image', category: 'workshop', src: 'images/workshop2.png', alt: 'Workshop 2' },
    { id: 3, type: 'image', category: 'workshop', src: 'images/workshop3.png', alt: 'Workshop 3' },
    { id: 4, type: 'image', category: 'seminar', src: 'images/hackthon1.png', alt: 'Seminar 1' },
    { id: 5, type: 'image', category: 'seminar', src: 'images/hackthon2.png', alt: 'Seminar 2' },
    { id: 6, type: 'image', category: 'seminar', src: 'images/hackthon3.png', alt: 'Seminar 3' },
    { id: 7, type: 'image', category: 'seminar', src: 'images/hackthon4.png', alt: 'Seminar 4' },
    { id: 8, type: 'video', category: 'hackathon', src: 'images/TA2.mp4', alt: 'Hackathon Video 2' },
    { id: 9, type: 'video', category: 'hackathon', src: 'images/TA3.mp4', alt: 'Hackathon Video 3' },
    { id: 10, type: 'video', category: 'workshop', src: 'images/TA1.mp4', alt: 'Workshop Video 1' },
    
  ];

  const filterOptions = [
    {value: 'all', label:'All' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'seminar', label: 'Seminars' },
    { value: 'hackathon', label: 'Hackathons' },
  ];

  // Filter media based on the selected filter
  const filteredMedia = selectedFilter === 'all'
    ? media
    : media.filter((item) => item.category === selectedFilter);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="technical-activities-page">
      <h1>Technical Activities</h1>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <select
          className="filter-select"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Media Grid */}
      <div className="media-grid">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            className="media-item"
            onClick={() => handleMediaClick(item)}
          >
            {item.type === 'image' ? (
              <LazyLoadImage
                src={item.src}
                alt={item.alt}
                effect="blur"
                className="media-image"
              />
            ) : (
              <div className="media-video-preview">
                <ReactPlayer
                  url={item.src}
                  light={true}
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt={selectedMedia.alt} />
            ) : (
              <ReactPlayer url={selectedMedia.src} playing controls />
            )}
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="back_next_container"> 
       
       <Link to='/Extracurricularactivities' className="back_next_buttons">Back</Link>
     
       <Link to='/course' className="back_next_buttons">Next</Link>
     
    </div>
    </div>
  );
};

export default TechnicalActivities;

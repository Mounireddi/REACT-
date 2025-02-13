import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPlayer from 'react-player';
import './Extracurricularactivities.css';
import { Link } from 'react-router-dom';
const ExtraCurricular = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Media data
  const media = [
    { type: 'image', src: 'images/extractivity1.png', alt: 'Activity 1' },
    { type: 'image', src: 'images/extractivity2.png', alt: 'Activity 2' },
    { type: 'image', src: 'images/extractivity3.png', alt: 'Activity 3' },
    { type: 'image', src: 'images/extractivity4.png', alt: 'Activity 4' },
    { type: 'video', src: 'images/extraactivity1.mp4', alt: 'Activity Video 1' },
    { type: 'video', src: 'images/extraactivity2.mp4', alt: 'Activity Video 2' },
    { type: 'video', src: 'images/extraactivity3.mp4', alt: 'Activity Video 3' },
  ];

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="extra-curricular-page">
      <h1>Extra-Curricular Activities</h1>
      <div className="media-grid">
        {media.map((item, index) => (
          <div
            key={index}
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
          <div className="modal-content">
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt={selectedMedia.alt} />
            ) : (
              <ReactPlayer url={selectedMedia.src} playing controls />
            )}
          </div>
        </div>
      )}
       <div className="back_next_container"> 
       
       <Link to='/faculity' className="back_next_buttons">Back</Link>
     
       <Link to='/Technical-Activites' className="back_next_buttons">Next</Link>
     
    </div>
    </div>
  );
};

export default ExtraCurricular;

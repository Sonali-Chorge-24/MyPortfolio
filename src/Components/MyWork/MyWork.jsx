import React, { useState, useEffect, useRef } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern .png';
import MyWork_Data from '../../assets/MyWork_Data.js';
import arrow from '../../assets/arrow.svg';

const MyWork = () => {
  const videoRefs = useRef([]);
  const [activeWork, setActiveWork] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) video.play();
          else video.pause();
        });
      },
      { threshold: 0.5 }
    );
    videoRefs.current.forEach((video) => video && observer.observe(video));
    return () => observer.disconnect();
  }, []);

  const openWorkModal = (work) => {
    setActiveWork(work);
  };
  const closeModal = () => {
    setActiveWork(null);
  };
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Personal Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {MyWork_Data.map((work, index) => (
          <div className="work-card" key={index}>
            <h3 className="work-title">{work.w_no}. {work.w_name}</h3>
            {work.w_video ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={work.w_video}
                muted
                loop
                className="work-video"
                onClick={() => openWorkModal(work)}
              />
            ) : (
              <img
                src={work.w_img}
                className="work-image"
                alt={work.w_name}
                onClick={() => openWorkModal(work)}/>)}
          </div>
        ))}
      </div>
      {activeWork && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>✖</span>

            <h2>{activeWork.w_name}</h2>
            <p className="work-description">{activeWork.w_desc}</p>
            <p>{activeWork.w_purpose}</p>
            {activeWork.w_video ? (
              <video src={activeWork.w_video} controls autoPlay className="video-modal-player" />
            ) : (
              <img src={activeWork.w_img} className="video-modal-player" alt={activeWork.w_name} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default MyWork;

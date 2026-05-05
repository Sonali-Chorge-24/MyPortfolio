import React, { useState, useEffect, useRef } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern .png';
import MyWork_Data from '../../assets/MyWork_Data.js';

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

  const openWorkModal = (work) => setActiveWork(work);
  const closeModal = () => setActiveWork(null);

  const renderMedia = (work, index, isModal = false) => {
    // If it's a YouTube embed link
    if (work.w_video && work.w_video.startsWith('https://www.youtube.com/embed')) {
      return (
        <iframe
          width={isModal ? "100%" : "100%"}
          height={isModal ? "400" : "250"}
          src={work.w_video}
          title={work.w_name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={isModal ? "video-modal-player" : "work-video"}
          onClick={!isModal ? () => openWorkModal(work) : undefined}
        />
      );
    }

    // If it's a local video
    if (work.w_video) {
      return (
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          src={work.w_video}
          muted
          loop
          className={isModal ? "video-modal-player" : "work-video"}
          controls={isModal}
          autoPlay={isModal}
          onClick={!isModal ? () => openWorkModal(work) : undefined}
        />
      );
    }

    // If it's an image
    return (
      <img
        src={work.w_img}
        alt={work.w_name}
        className={isModal ? "video-modal-player" : "work-image"}
        onClick={!isModal ? () => openWorkModal(work) : undefined}
      />
    );
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
            {renderMedia(work, index)}
          </div>
        ))}
      </div>

      {activeWork && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>✖</span>
            <h2>{activeWork.w_name}</h2>
            <p className="work-description">{activeWork.w_desc}</p>
            {renderMedia(activeWork, 0, true)}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;

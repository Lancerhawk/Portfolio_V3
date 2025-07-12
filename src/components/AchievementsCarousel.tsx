import React, { useState, useEffect, useRef } from 'react';
import './AchievementsCarousel.css';
import aiHealthImg from '../assets/CouroselImages/AIinhealthcare/1.png';
import aiHealthImg2 from '../assets/CouroselImages/AIinhealthcare/2.png';
import aiHealthImg3 from '../assets/CouroselImages/AIinhealthcare/3.png';
import sih2024Img from '../assets/Certifications_Images/SIH2024/SIH 2024.jpg';
import sih2024Img2 from '../assets/CouroselImages/SIH/2.png';
import sih2024Img3 from '../assets/CouroselImages/SIH/3.png';
import KGP1 from '../assets/CouroselImages/KGP/1.png';
import KGP2 from '../assets/CouroselImages/KGP/2.png';
import KGP3 from '../assets/CouroselImages/KGP/3.png';

const achievementsData = [
  {
    title: 'AI in HealthCare Winner',
    description:
      'Won the Internal AI hackathon on HealthCare in Baderia Global Institute of Engineering and Management. Our Problem Statement was Creating an AI Prediction model for early Cancer detection and using Mammograms for Accurately doing Analysis of the cancer.',
    members: ['Arin Jain', 'Shanti Mishra', 'MraduI Deodhiya', 'Tanishq Yadav'],
    images: [aiHealthImg, aiHealthImg2, aiHealthImg3],
  },
  {
    title: 'SIH-2024 Finalist',
    description:
      'Became the Finalists and went to Chennai at Sai Ram College for the finale round of Smart India Hackathon 2024. Our Problem Statement was Drug Inventory and Supply Chain Management System.',
    members: ['Aayush Kewat', 'Arin Jain', 'Harshit Jain', 'Shachi Shukla', 'Nimish Dubey', 'Palak Vishwakarma'],
    images: [sih2024Img,sih2024Img2,sih2024Img3],
  },
  {
    title: 'IIT Kharagpur E-Cell KGP',
    description:
      'Went to Global Enterpreneuship Summit(2025) at IIT Kharagpur! Participated in Handson Workshops, Ceremony, Events etc. Made Connections with IITians, Professors, Enterpreneurs and learned about Software Development, Cybersecurity and Team Management by Industry Experts.',
    members: ['Arin Jain', 'Arpit Shukla'],
    images: [KGP1, KGP2, KGP3],
  },
];

const AUTO_ADVANCE_INTERVAL = 7000;
const IMAGE_ROTATE_INTERVAL = 2500;
const SEGMENT_DURATION = AUTO_ADVANCE_INTERVAL / 4;

const AchievementsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [animating, setAnimating] = useState(false);
  const [progressKey, setProgressKey] = useState(0); 
  const imgTimer = useRef<number | null>(null);
  const slideTimer = useRef<number | null>(null);

  useEffect(() => {
    slideTimer.current = window.setTimeout(() => {
      handleNext();
    }, AUTO_ADVANCE_INTERVAL);
    setProgressKey((k) => k + 1); 
    return () => {
      if (slideTimer.current !== null) clearTimeout(slideTimer.current);
    };
  }, [current]);

  useEffect(() => {
    imgTimer.current = window.setTimeout(() => {
      setImgIdx((prev) =>
        (prev + 1) % achievementsData[current].images.length
      );
    }, IMAGE_ROTATE_INTERVAL);
    return () => {
      if (imgTimer.current !== null) clearTimeout(imgTimer.current);
    };
  }, [imgIdx, current]);

  const triggerAnimation = (direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500); 
  };

  const goTo = (idx: number) => {
    if (idx === current) return;
    triggerAnimation(idx > current ? 'right' : 'left');
    setTimeout(() => {
      setCurrent(idx);
      setImgIdx(0);
      setProgressKey((k) => k + 1); 
    }, 10);
  };

  const handlePrev = () => {
    triggerAnimation('left');
    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? achievementsData.length - 1 : prev - 1
      );
      setImgIdx(0);
      setProgressKey((k) => k + 1);
    }, 10);
  };
  const handleNext = () => {
    triggerAnimation('right');
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % achievementsData.length);
      setImgIdx(0);
      setProgressKey((k) => k + 1); 
    }, 10);
  };

  const ach = achievementsData[current];

  return (
    <div className="achievements-carousel">
      <div className="carousel-progress-border">
        <div
          key={progressKey + '-top'}
          className="carousel-progress-segment top"
          style={{ animationDuration: `${SEGMENT_DURATION}ms` }}
        />
        <div
          key={progressKey + '-right'}
          className="carousel-progress-segment right"
          style={{ animationDuration: `${SEGMENT_DURATION}ms`, animationDelay: `${SEGMENT_DURATION}ms` }}
        />
        <div
          key={progressKey + '-bottom'}
          className="carousel-progress-segment bottom"
          style={{ animationDuration: `${SEGMENT_DURATION}ms`, animationDelay: `${SEGMENT_DURATION * 2}ms` }}
        />
        <div
          key={progressKey + '-left'}
          className="carousel-progress-segment left"
          style={{ animationDuration: `${SEGMENT_DURATION}ms`, animationDelay: `${SEGMENT_DURATION * 3}ms` }}
        />
      </div>
      <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous achievement">&#8592;</button>
      <div className={`carousel-content slide-${slideDirection}${animating ? ' animating' : ''}`}>
        <div className="carousel-image-gallery">
          <img
            src={ach.images[imgIdx]}
            alt={ach.title + ' image'}
            className="carousel-image"
          />
          {ach.images.length > 1 && (
            <div className="carousel-thumbnails">
              {ach.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={ach.title + ' thumbnail ' + (i + 1)}
                  className={
                    'carousel-thumbnail' + (i === imgIdx ? ' selected' : '')
                  }
                  onClick={() => setImgIdx(i)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="carousel-details">
          <h3 className="carousel-title">{ach.title}</h3>
          <p className="carousel-description">{ach.description}</p>
          <div className="carousel-members">
            {ach.members.map((m, i) => (
              <span className="carousel-member" key={i}>{m}</span>
            ))}
          </div>
        </div>
      </div>
      <button className="carousel-arrow right" onClick={handleNext} aria-label="Next achievement">&#8594;</button>
      <div className="carousel-dots">
        {achievementsData.map((_, i) => (
          <span
            key={i}
            className={
              'carousel-dot' + (i === current ? ' active' : '')
            }
            onClick={() => goTo(i)}
            aria-label={`Go to achievement ${i + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsCarousel; 
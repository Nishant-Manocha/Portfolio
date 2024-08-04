// Timeline.js
import React, { useState, useEffect } from 'react';
import './Timeline.css';
import { Education } from '../../data/Timeline/Education';
import { Experience } from '../../data/Timeline/Experience';
import TimelineItem from './TimelineItem';
import { useInView } from 'react-intersection-observer';

const Timeline = () => {
  const [animate, setAnimate] = useState(false);
  const [timelineData, setTimelineData] = useState(Education);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Reset animation when data changes
  useEffect(() => 
  {
    setAnimate(false); // Turn off animation

    setTimeout(() => 
    {
      setAnimate(true); 
    }, 0); 
  }, [timelineData]);

  // Optional: To ensure animation when entering view
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <>

      <div className="timeline-main-heading">
        <div className='upper'><h5>Qualification</h5></div>
        <div className='lower'>
          <h2
            className={`timeline-button ${timelineData === Education ? 'button-active' : ''}`}
            onClick={() => setTimelineData(Education)}>
            Education
          </h2>
          <h2
            className={`timeline-button ${timelineData === Experience ? 'button-active' : ''}`}
            onClick={() => setTimelineData(Experience)}>
            Experience
          </h2>
        </div>

      </div>
      <div className={`timeline ${animate ? 'animate' : ''}`} ref={ref}>
        {timelineData.map(item => (
          <TimelineItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Timeline;

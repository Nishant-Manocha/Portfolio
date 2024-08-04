// TimelineItem.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Timeline.css';

const TimelineItem = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className={`timeline-container ${inView ? 'animate' : ''} ${item.id % 2 !== 0 ? 'left' : 'right'}`}
      key={item.id}
      ref={ref}
    >
      <div className='text-box'>
        <h3 className='title'>{item.field}</h3>
        <p>{item.desc}</p>
        <span className='date'>{item.date}</span>
        <div className={`${item.id % 2 !== 0 ? 'left-arrow' : 'right-arrow'}`}></div>
      </div>
      <span className='circle'></span>
    </div>
  );
};

export default TimelineItem;

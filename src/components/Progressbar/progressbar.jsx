import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ width: 300, height: 300 }} className='absolute'>
      <CircularProgressbar
        value={scrollProgress}
        text={`${Math.round(scrollProgress)}%`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#4caf50',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default ProgressBar;
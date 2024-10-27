import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
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


//   const bgScrollBar =()=>{
//     if (scrollProgress <= 50){
//         return  "yellow"
//     }else if(scrollProgress <= 70 ){
//         return "green"
//     }else{
//         return "red"
//     }
//   }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '20px', backgroundColor: 'transparent' }}>
      <div
        style={{
          width:`${scrollProgress}%` ,
          height:"100%" ,
          backgroundColor: "#f0f8ff47", 
          transition: 'width 0.2s ease',
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;

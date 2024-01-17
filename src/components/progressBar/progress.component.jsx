import React, { useEffect, useRef, useState } from 'react';

const ProgressBar = ({ skillName, fillPercentage }) => {
  const progressBarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    const handleScroll = () => {
      const rect = progressBar.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Check if the progress bar is at least 50% visible in the viewport
      setIsVisible(rect.top < windowHeight && rect.bottom >= 0.5 * windowHeight);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize visibility on mount
    handleScroll();

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[12px] border-2 border-[--secondary-color] rounded-full">
      <div
        ref={progressBarRef}
        style={{ width: `${isVisible ? fillPercentage : 0}%` }}
        className="bg-[--secondary-color] h-full rounded-e-full transition-all duration-500"
      ></div>
    </div>
  );
};

export default ProgressBar;

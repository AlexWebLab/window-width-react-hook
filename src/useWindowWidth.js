import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // Initialize state with undefined width so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [WindowWidth, setWindowWidth] = useState(undefined);

  // Handler to call on window resize
  const resizeEvent = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    // Add event listener
    window.addEventListener('resize', resizeEvent);

    // Call handler right away so state gets updated with initial window size
    resizeEvent();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', resizeEvent);
  }, []);  // Empty array ensures that effect is only run on mount

  return WindowWidth;
}

export default useWindowWidth;
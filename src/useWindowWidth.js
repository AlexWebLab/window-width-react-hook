import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeEvent = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [])

  return WindowWidth;
}

export default useWindowWidth;
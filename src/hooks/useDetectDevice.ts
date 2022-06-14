import { useEffect, useState } from 'react';

/**
 * This hook is used to detect if the user is on desktop or not
 * It is not ideal to use a hook for this since the detection is done after the page renders
 * Instead, we should for example use a library such as 'react-device-detect'
 * */

export const useDetectDevice = () => {
  const [width, setWidth] = useState<number>(0);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {

    window.addEventListener('resize', handleWindowSizeChange);
    window.addEventListener('load', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      window.removeEventListener('load', handleWindowSizeChange);
    };
  }, []);

  return  1024 <= width;
};

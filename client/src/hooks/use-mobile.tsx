import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current viewport is mobile
 * @param breakpoint - The max width in pixels to consider as a mobile device
 * @returns boolean - true if current viewport is less than or equal to breakpoint
 */
export function useMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Set initial value
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [breakpoint]);

  return isMobile;
}

export default useMobile;

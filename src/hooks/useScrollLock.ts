import { useEffect } from 'react';

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    if (isLocked) {
      // Prevent content shift when scrollbar disappears
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}
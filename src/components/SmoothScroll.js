import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false,
      resetNativeScroll: true,
      lerp: 0.075,
      multiplier: 1,
      class: 'is-revealed',
    });

    // Update locomotive scroll
    window.addEventListener('resize', () => scroll.update());

    return () => {
      scroll.destroy();
      window.removeEventListener('resize', () => scroll.update());
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
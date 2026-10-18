import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from '../animations/gsapSetup';

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Keep ScrollTrigger in sync with every Lenis scroll frame.
    lenis.on('scroll', ScrollTrigger.update);

    // CRITICAL: drive Lenis from GSAP's own ticker so ScrollTrigger pin
    // calculations and Lenis paint happen on the SAME frame. Running a
    // separate requestAnimationFrame loop (the previous approach) desynced
    // the two and caused pinned sections to fail to pin and overlap.
    const onTick = (time: number) => {
      lenis.raf(time * 1000); // GSAP ticker time is in seconds; Lenis wants ms
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Recalculate pin start/end once fonts and layout have settled.
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      gsap.ticker.remove(onTick);
      window.clearTimeout(refreshTimer);
      window.removeEventListener('load', onLoad);
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;

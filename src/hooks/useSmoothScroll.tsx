import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from '../animations/gsapSetup';

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsapTicker(lenis);

    function gsapTicker(lenisInstance: Lenis) {
      function raf(time: number) {
        lenisInstance.raf(time * 1000);
      }
      // Set Lenis to drive animation frame timing
      requestAnimationFrame(function frame(time) {
        raf(time);
        requestAnimationFrame(frame);
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;

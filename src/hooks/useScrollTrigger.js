import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollTrigger = (animation, dependencies = []) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    let ctx;
    
    if (element) {
      // Create a new GSAP context
      ctx = gsap.context(() => {
        animation(element);
      });
    }
    
    // Cleanup function
    return () => {
      if (ctx) {
        ctx.revert(); // Clean up all GSAP animations
      }
    };
  }, dependencies);
  
  return ref;
}; 
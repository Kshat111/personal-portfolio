import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import ThreeDObject from '../shared/ThreeDObject';
import Button from '../shared/Button';
import Container from '../shared/Container';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const text = textRef.current;
    const cta = ctaRef.current;
    
    if (section && heading && text && cta) {
      // Create GSAP context to ensure cleanup
      const ctx = gsap.context(() => {
        // Initial animations
        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
        
        timeline
          .from(heading, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2
          })
          .from(text, {
            y: 30,
            opacity: 0,
            duration: 0.8
          }, '-=0.6')
          .from(cta, {
            y: 20,
            opacity: 0,
            duration: 0.6
          }, '-=0.4');
        
        // ScrollTrigger for parallax effect
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.1,
          ease: 'none'
        });
      }, section);
      
      return () => ctx.revert(); // Cleanup
    }
  }, []);
  
  return (
    <HeroSection ref={sectionRef}>
      <ThreeDScene />
      <Container>
        <HeroContent>
          <HeroHeading ref={headingRef}>
            Creative 
            <span className="accent"> Digital</span>
            <br />
            <span className="outline">Portfolio</span>
          </HeroHeading>
          
          <HeroText ref={textRef}>
            Showcasing mastery in Three.js and GSAP animations 
            with a quirky yet clean visual identity.
          </HeroText>
          
          <CtaContainer ref={ctaRef}>
            <Button to="/projects" size="large">
              View Projects
            </Button>
            <Button to="/contact" variant="secondary" size="large">
              Get in Touch
            </Button>
          </CtaContainer>
          
          <ScrollIndicator>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </ScrollIndicator>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-xl) 0;
  overflow: hidden;
`;

const ThreeDScene = styled(ThreeDObject)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 2;
`;

const HeroHeading = styled.h1`
  font-size: 4.5rem;
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
  
  .accent {
    background: linear-gradient(90deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .outline {
    color: transparent;
    -webkit-text-stroke: 2px var(--text-primary);
  }
  
  @media (max-width: 1200px) {
    font-size: 4rem;
  }
  
  @media (max-width: 992px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: var(--spacing-sm);
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    -webkit-text-stroke: 1px var(--text-primary);
  }
  
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  
  @media (max-width: 992px) {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-md);
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: var(--spacing-sm);
  }
`;

const CtaContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
    
    & > * {
      width: 100%;
    }
  }
`;

// const ScrollIndicator = styled.div`
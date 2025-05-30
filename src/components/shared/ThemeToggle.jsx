import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const buttonRef = useRef(null);
  const timelineRef = useRef(null);
  
  useEffect(() => {
    // Create a GSAP timeline for the animation
    timelineRef.current = gsap.timeline({ paused: true });
    
    // Animation for theme toggle
    timelineRef.current
      .to(buttonRef.current, {
        rotate: 360,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      .to(
        '.toggle-icon', 
        {
          morphSVG: isDarkMode ? '.sun-icon' : '.moon-icon',
          duration: 0.5,
          ease: 'power2.inOut'
        },
        0
      );
    
    // Play animation if initialized
    if (isDarkMode !== null) {
      timelineRef.current.play();
    }
    
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isDarkMode]);
  
  const handleToggle = () => {
    // Play the animation in reverse when toggling
    if (timelineRef.current) {
      if (isDarkMode) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
    toggleTheme();
  };

  return (
    <ToggleButton ref={buttonRef} onClick={handleToggle} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      {isDarkMode ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="toggle-icon moon-icon"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="toggle-icon sun-icon"
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background-color: var(--background-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color var(--transition-fast),
              color var(--transition-fast),
              border-color var(--transition-fast);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--accent);
    color: white;
    border-color: var(--accent);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--accent-secondary);
  }
`;

export default ThemeToggle; 
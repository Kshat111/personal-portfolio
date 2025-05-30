import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors - Dark Mode (default) */
    --background: #0A0B2A;
    --background-secondary: #10113A;
    --foreground: #f5f5f5;
    --accent: #6f42c1;
    --accent-secondary: #ba68c8;
    --text-primary: #f5f5f5;
    --text-secondary: #bdbdbd;
    --success: #4caf50;
    --error: #f44336;
    --border: #333366;
    --shadow: rgba(0, 0, 0, 0.4);
    
    /* Gradient Colors */
    --gradient-primary: linear-gradient(135deg, #0A0B2A 0%, #121450 100%);
    --gradient-secondary: radial-gradient(circle at top right, rgba(111, 66, 193, 0.2) 0%, transparent 60%);
    --gradient-accent: radial-gradient(circle at bottom left, rgba(186, 104, 200, 0.2) 0%, transparent 60%);
    
    /* Rainbow Colors */
    --rainbow-red: #ff5e5e;
    --rainbow-orange: #ff9e4f;
    --rainbow-yellow: #ffde59;
    --rainbow-green: #7ed957;
    --rainbow-blue: #57c9d9;
    --rainbow-indigo: #5781d9;
    --rainbow-violet: #a557d9;
    
    /* Spacing */
    --spacing-xs: clamp(0.5rem, 2vw, 0.75rem);
    --spacing-sm: clamp(1rem, 3vw, 1.5rem);
    --spacing-md: clamp(1.5rem, 4vw, 2rem);
    --spacing-lg: clamp(2rem, 5vw, 3rem);
    --spacing-xl: clamp(2.5rem, 6vw, 4rem);
    
    /* Typography */
    --font-primary: 'Helvetica Neue', Arial, sans-serif;
    --font-secondary: 'Space Grotesk', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  body.light-mode {
    --background: #f0f0f8;
    --background-secondary: #e0e0f0;
    --foreground: #121230;
    --accent: #6f42c1;
    --accent-secondary: #9c27b0;
    --text-primary: #121230;
    --text-secondary: #555580;
    --border: #ccccdd;
    --shadow: rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(135deg, #f0f0f8 0%, #e0e0f0 100%);
    --gradient-secondary: radial-gradient(circle at top right, rgba(111, 66, 193, 0.1) 0%, transparent 60%);
    --gradient-accent: radial-gradient(circle at bottom left, rgba(156, 39, 176, 0.1) 0%, transparent 60%);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-primary);
    background: var(--gradient-primary);
    color: var(--text-primary);
    line-height: 1.6;
    transition: background-color var(--transition-normal),
                color var(--transition-normal);
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  
  /* Background gradient overlays */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: var(--gradient-secondary), var(--gradient-accent);
    pointer-events: none;
    z-index: -1;
  }
  
  body > * {
    width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    line-height: 1.2;
    text-transform: uppercase;
  }
  
  h1 {
    font-size: 4rem;
    
    @media (max-width: 1200px) {
      font-size: 3.5rem;
    }
    
    @media (max-width: 992px) {
      font-size: 3rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  
  h2 {
    font-size: 2.5rem;
    
    @media (max-width: 1200px) {
      font-size: 2.25rem;
    }
    
    @media (max-width: 992px) {
      font-size: 2rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    
    @media (max-width: 1200px) {
      font-size: 1.75rem;
    }
    
    @media (max-width: 992px) {
      font-size: 1.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1.35rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }
  
  p {
    margin-bottom: var(--spacing-sm);
  }
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--accent-secondary);
    }
  }
  
  button {
    font-family: var(--font-primary);
    cursor: pointer;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--background-secondary);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: var(--radius-full);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-secondary);
  }
  
  /* Rainbow top border */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      to right,
      var(--rainbow-red),
      var(--rainbow-orange),
      var(--rainbow-yellow),
      var(--rainbow-green),
      var(--rainbow-blue),
      var(--rainbow-indigo),
      var(--rainbow-violet)
    );
    z-index: 2000;
  }
  
  /* Update spacing variables for better mobile experience */
  @media (max-width: 768px) {
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.75rem;
    --spacing-md: 1.25rem;
    --spacing-lg: 2rem;
    --spacing-xl: 2.5rem;
  }
  
  @media (max-width: 480px) {
    --spacing-xs: 0.375rem;
    --spacing-sm: 0.625rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
  }
  
  /* Improve mobile touch targets */
  @media (max-width: 768px) {
    button, 
    a {
      min-height: 44px;
      min-width: 44px;
      padding: 0.5rem 1rem;
    }
    
    input, 
    select, 
    textarea {
      min-height: 44px;
      padding: 0.5rem;
    }
  }
`; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterNav>
          <FooterLink to="/thoughts">Thoughts</FooterLink>
          <FooterLink to="/drawing">Drawings</FooterLink>
          <FooterLink to="/courses">Courses</FooterLink>
          <FooterLink to="/tools">Tools</FooterLink>
          <FooterLink to="/design">Designs</FooterLink>
        </FooterNav>

        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/akshatsingh1011/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href="https://github.com/Kshat111" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/axatthisside/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="mailto:akshatsingh22084@gmail.com" target="_blank" rel="noopener noreferrer">
            <GmailIcon />
          </SocialLink>
        </SocialLinks>

        <Copyright>© {new Date().getFullYear()} | Akshat Singh</Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

// SVG Icons
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
    <path d="M349.33 69.33H162.67A93.34 93.34 0 0069.33 162.67v186.66A93.34 93.34 0 00162.67 442.67h186.66A93.34 93.34 0 00442.67 349.33V162.67A93.34 93.34 0 00349.33 69.33zm61.34 280a61.41 61.41 0 01-61.34 61.34H162.67a61.41 61.41 0 01-61.34-61.34V162.67a61.41 61.41 0 0161.34-61.34h186.66a61.41 61.41 0 0161.34 61.34z"/>
    <path d="M256 165.39A90.61 90.61 0 10346.61 256 90.66 90.66 0 00256 165.39zm0 149.56A58.94 58.94 0 11314.94 256 58.94 58.94 0 01256 314.95z"/>
    <circle cx="370" cy="140" r="17.06"/>
  </svg>
);

const GmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
  </svg>
);

// Styled Components
const FooterWrapper = styled.footer`
  background-color: var(--footer-bg);
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
  padding: 0.25rem 0.5rem;

  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  margin: 0.5rem 0;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  transition: all 0.2s ease;
  display: inline-flex;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    color: var(--accent-color);
    background-color: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  svg {
    display: block;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.8;
`;

export default Footer;
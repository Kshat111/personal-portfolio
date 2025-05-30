import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Container from '../shared/Container';


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const worksRef = useRef(null);
  const moreRef = useRef(null);
  
  useEffect(() => {
    // Create scroll animations
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-title, .hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Works animation
      gsap.from('.work-item', {
        scrollTrigger: {
          trigger: worksRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // More section animation
      gsap.from('.more-item', {
        scrollTrigger: {
          trigger: moreRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      });
    });
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  // Mock project data
  const featuredWorks = [
    {
      id: 1,
      title: "SNOWSHIELD",
      tags: [],
      
      links: [
        { text: "GitHub", url: "https://github.com/Kshat111/snow-shield-aware" },
        { text: "Product", url: "https://snow-shield.vercel.app/", external: true }
      ],
      image: "/assets/images/snowshield.png"
    },
    {
      id: 2,
      title: "BHEDCHAAL",
      tags: [],
      links: [
        { text: "GitHub", url: "https://github.com/that-coding-kid/BhedChaal" },
        // { text: "Live", url: "https://lgbtmyths.com", external: true }
      ],
      image: "/assets/images/bhedchaal.png"
    },
    {
      id: 3,
      title: "SADAK",
      tags: [],
      links: [
        { text: "GitHub", url: "https://github.com/that-coding-kid/S.A.D.A.K" },
        { text: "Product", url: "https://sadakapp.streamlit.app/", external: true }
      ],
      image: "/assets/images/sadak.png"
    },
    {
      id: 4,
      title: "KANBAN BOARD",
      tags: [],
      links: [
        { text: "GitHub", url: "https://github.com/Kshat111/kanban-board" },
        { text: "Product", url: "https://61jsolapa0rxp8qs.vercel.app/", external: true }
      ],
      image: "/assets/images/kanbanboard.jpg"
    }
  ];
  
  return (
    <HomeContainer>
      {/* Hero Section */}
      <Section ref={heroRef}>
        <Container>
          <HeroContent>
            <HeroSubtitle className="hero-subtitle">Hi～ I'm Akshat, an</HeroSubtitle>
            <HeroTitle className="hero-title">
              ENGINEER. ARTIST. ILLUSTRATOR.
            </HeroTitle>
            
            <HeroImage>
              <div className="avatar-circle">
                <img src="/assets/images/main_pic.png" alt="Portrait" />
              </div>
            </HeroImage>
            
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
            </SocialLinks>
            
            <CurrentPositionWrapper>
              <CurrentPosition>
                <span>Currently SDE Intern at</span>
                <CurrentCompany>
                  <span className="company-icon"><img src="/assets/images/amazon.webp" alt="Amazon" /></span>
                </CurrentCompany>
              </CurrentPosition>
            </CurrentPositionWrapper>
          </HeroContent>
        </Container>
      </Section>
      
      {/* Selected Works */}
      <Section ref={worksRef}>
        <Container>
          <SectionTitle>SEE PROJECTS</SectionTitle>
          
          <WorksGrid>
            {featuredWorks.map(work => (
              <WorkItem key={work.id} className="work-item">
                <WorkImageContainer>
                  <WorkImagePlaceholder 
                    style={{
                      backgroundImage: `url(${work.image})`,
                      backgroundColor: `hsl(${work.id * 50}, 70%, 60%)`
                    }} 
                  />
                </WorkImageContainer>
                <WorkInfo>
                  <WorkTitle>
                    {work.title}
                    {work.state && <WorkState>{work.state}</WorkState>}
                  </WorkTitle>
                  <WorkTags>
                    {work.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </WorkTags>
                  <WorkLinks>
                    {work.links.map((link, index) => (
                      link.external ? (
                        <WorkExternalLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.text} {link.text === 'Live' || link.text === 'App Store' ? '↗' : '→'}
                        </WorkExternalLink>
                      ) : (
                        <WorkInternalLink key={index} to={link.url}>
                          {link.text} →
                        </WorkInternalLink>
                      )
                    ))}
                  </WorkLinks>
                </WorkInfo>
              </WorkItem>
            ))}
          </WorksGrid>
        </Container>
      </Section>
      
      {/* More Section */}
      <Section ref={moreRef}>
        <Container>
          <SectionTitle>MORE</SectionTitle>
          
          <MoreGrid>
            <MoreItem as={Link} to="/about" className="more-item">
              <MoreItemTitle>ABOUT ME</MoreItemTitle>
              <MoreItemSubtitle>Personality & Experience</MoreItemSubtitle>
              <MoreItemContent>
                <AboutMeContent>
                  <AboutImage>
                    <img src="/assets/images/about-pic.jpg" alt="About Me" />
                  </AboutImage>
                </AboutMeContent>
              </MoreItemContent>
            </MoreItem>
            
            <MoreItem as={Link} to="/design" className="more-item">
            <MoreItemTitle>DESIGN</MoreItemTitle>
              <MoreItemSubtitle>UI and Digital Art</MoreItemSubtitle>
              <MoreItemContent>
                <ToolsGrid1>
                  <ToolIcon style={{ backgroundColor: '#ff9e80' }} />
                  <ToolIcon style={{ backgroundColor: '#a693eb' }} />
                  <ToolIcon style={{ backgroundColor: '#a2d39b' }} />
                  <ToolIcon style={{ backgroundColor: '#ff7c7c' }} />
                </ToolsGrid1>
              </MoreItemContent>
            </MoreItem>
            
            <MoreItem as={Link} to="/tools" className="more-item">
              <MoreItemTitle>TOOLS</MoreItemTitle>
              <MoreItemSubtitle>Software I use and recommend</MoreItemSubtitle>
              <MoreItemContent>
                <ToolsGrid>
                  <ToolIcon style={{ backgroundColor: '#ff9e80' }} />
                  <ToolIcon style={{ backgroundColor: '#a693eb' }} />
                  <ToolIcon style={{ backgroundColor: '#a2d39b' }} />
                  <ToolIcon style={{ backgroundColor: '#ffc658' }} />
                  <ToolIcon style={{ backgroundColor: '#5591f5' }} />
                  <ToolIcon style={{ backgroundColor: '#ff7c7c' }} />
                </ToolsGrid>
              </MoreItemContent>
            </MoreItem>
            
            <MoreItem as={Link} to="/courses" className="more-item">
              <MoreItemTitle>COURSES</MoreItemTitle>
              <MoreItemSubtitle>Core CS fundamentals I've studied</MoreItemSubtitle>
              <MoreItemContent>
                <BookshelfGrid>
                  <BookCover style={{ backgroundColor: '#ffde59' }} />
                  <BookCover style={{ backgroundColor: '#3182ce' }} />
                </BookshelfGrid>
              </MoreItemContent>
            </MoreItem>
            
            <MoreItem as={Link} to="/drawing" className="more-item">
              <MoreItemTitle>DRAWING</MoreItemTitle>
              <MoreItemSubtitle>Personal illustrations</MoreItemSubtitle>
              <MoreItemContent>
                <DrawingGrid>
                  <DrawingImg style={{ backgroundColor: '#a693eb' }} />
                  <DrawingImg style={{ backgroundColor: '#ff9e80' }} />
                  <DrawingImg style={{ backgroundColor: '#ff7eb9' }} />
                  <DrawingImg style={{ backgroundColor: '#a2d39b' }} />
                </DrawingGrid>
              </MoreItemContent>
            </MoreItem>
            
            <MoreItem as={Link} to="/posts" className="more-item">
              <MoreItemTitle>POSTS</MoreItemTitle>
              <MoreItemSubtitle>Thoughts I've shared</MoreItemSubtitle>
              <MoreItemContent>
              <ToolsGrid2>
                <ToolIcon style={{ backgroundColor: '#ff9e80' }} />
                <ToolIcon style={{ backgroundColor: '#a693eb' }} />
                <ToolIcon style={{ backgroundColor: '#a2d39b' }} />
              </ToolsGrid2>
              </MoreItemContent>
            </MoreItem>
          </MoreGrid>
        </Container>
      </Section>
      
    </HomeContainer>
  );
};

// SVG Icons
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer rounded square */}
    <path d="M349.33 69.33H162.67A93.34 93.34 0 0069.33 162.67v186.66A93.34 93.34 0 00162.67 442.67h186.66A93.34 93.34 0 00442.67 349.33V162.67A93.34 93.34 0 00349.33 69.33zm61.34 280a61.41 61.41 0 01-61.34 61.34H162.67a61.41 61.41 0 01-61.34-61.34V162.67a61.41 61.41 0 0161.34-61.34h186.66a61.41 61.41 0 0161.34 61.34z" />

    {/* Inner circle (lens) */}
    <path d="M256 165.39A90.61 90.61 0 10346.61 256 90.66 90.66 0 00256 165.39zm0 149.56A58.94 58.94 0 11314.94 256 58.94 58.94 0 01256 314.95z" />

    {/* Moved dot (flash) downward and to the left slightly */}
    <circle cx="370" cy="140" r="17.06" />
  </svg>
);



const HomeContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Section = styled.section`
  padding: var(--spacing-xl) 0;
  
  &:first-of-type {
    min-height: 75vh;
    display: flex;
    align-items: center;
    padding: var(--spacing-lg) 0;
    
    @media (max-width: 768px) {
      min-height: 85vh;
      padding: var(--spacing-md) 0;
    }
    
    @media (max-height: 700px) {
      min-height: 100vh;
      padding: var(--spacing-sm) 0;
    }
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: var(--spacing-sm);
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xs);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: var(--spacing-xs);
  }
`;

const HeroTitle = styled.h1`
  font-size: 6rem;
  line-height: 0.9;
  margin-bottom: var(--spacing-md);
  width: 100%;
  max-width: 1400px;
  letter-spacing: -0.02em;
  white-space: pre-line;
  word-break: keep-all;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 5rem;
    max-width: 100%;
    margin-bottom: var(--spacing-sm);
  }
  
  @media (max-width: 480px) {
    font-size: 4.2rem;
  }
  
  @media (max-height: 700px) {
    font-size: 4.5rem;
    margin-bottom: var(--spacing-sm);
  }
`;

const HeroImage = styled.div`
  margin-bottom: var(--spacing-md);
  
  .avatar-circle {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--accent);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-sm);
    
    .avatar-circle {
      width: 180px;
      height: 180px;
    }
  }
  
  @media (max-height: 700px) {
    margin-bottom: var(--spacing-sm);
    
    .avatar-circle {
      width: 160px;
      height: 160px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  svg {
    width: 28px;
    height: 28px;
  }
  
  @media (max-height: 700px) {
    margin-bottom: var(--spacing-sm);
    gap: var(--spacing-sm);
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const SocialLink = styled.a`
  color: var(--text-primary);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--accent);
  }
`;

const CurrentPositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  @media (max-height: 700px) {
    margin-bottom: var(--spacing-md);
    gap: var(--spacing-xs);
  }
`;

const CurrentPosition = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  justify-content: center;
  
  span {
    color: var(--text-secondary);
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    
    @media (max-height: 700px) {
      font-size: 0.85rem;
    }
  }
`;

const CurrentCompany = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  
  .company-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
    
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
    
    @media (max-height: 700px) {
      width: 35px;
      height: 35px;
    }
  }
`;

const PreviousPositions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  span {
    color: var(--text-secondary);
  }
`;

const PrevCompany = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .company-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--background);
    font-weight: bold;
    font-size: 0.75rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  color: #ffffff;
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin: 0 auto;
  max-width: 1200px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-lg);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--spacing-md);
    padding: 0 var(--spacing-sm);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    padding: 0;
  }
`;

const WorkItem = styled.article`
  position: relative;
  margin-bottom: var(--spacing-lg);
`;

const WorkImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
`;

const WorkImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const WorkInfo = styled.div`
  padding: var(--spacing-xs) 0;
`;

const WorkTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
`;

const WorkState = styled.span`
  font-size: 0.875rem;
  margin-left: var(--spacing-xs);
  opacity: 0.7;
`;

const WorkTags = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
  
  span {
    font-size: 0.875rem;
    color: var(--text-secondary);
    
    &:not(:last-child)::after {
      content: '•';
      margin-left: var(--spacing-xs);
    }
  }
`;

const WorkLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const WorkInternalLink = styled(Link)`
  font-size: 0.875rem;
  color: var(--text-primary);
  
  &:hover {
    text-decoration: underline;
    color: var(--text-primary);
  }
`;

const WorkExternalLink = styled.a`
  font-size: 0.875rem;
  color: var(--text-primary);
  
  &:hover {
    text-decoration: underline;
    color: var(--text-primary);
  }
`;

const MoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin: 0 auto;
  max-width: 1200px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MoreItem = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #0A0C24;
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-lg);
  transition: transform var(--transition-normal);
  height: 340px;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MoreItemTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 4px;
  color: var(--text-primary);
`;

const MoreItemSubtitle = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  opacity: 0.8;
`;

const MoreItemContent = styled.div`
  width: 100%;
  flex: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-top: auto;
`;

// About Me styles
const AboutMeContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const AboutImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Now styles
const NowCard = styled.div`
  background-color: rgba(245, 245, 245, 0.98);
  color: #333;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const NowPage = styled.h4`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  color: #333;
  font-weight: 600;
`;

const NowUpdate = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: var(--spacing-md);
  font-style: italic;
`;

const NowDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.7;
  color: #444;
`;

// Tools styles
const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  height: 100%;
  padding: 5px;
`;

const ToolsGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  height: 100%;
  padding: 5px;
`;

const ToolsGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
  height: 100%;
  padding: 5px;
`;

const ToolIcon = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Bookshelf styles
const BookshelfGrid = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

const BookCover = styled.div`
  width: 130px;
  height: 190px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 110px;
    height: 165px;
  }
`;

// Drawing styles
const DrawingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  height: 100%;
  padding: 5px;
`;

const DrawingImg = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Posts styles
const PostCard = styled.div`
  background-color: rgba(245, 245, 245, 0.98);
  color: #333;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  height: 100%;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const PostContent = styled.p`
  font-size: 0.85rem;
  line-height: 1.7;
  color: #444;
`;

// Footer navigation
const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: var(--spacing-xl);
  background-color: var(--background);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-sm);
  }
`;

const FooterNavLeft = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const FooterNavRight = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const FooterLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
  
  &:hover {
    color: var(--accent);
  }
`;

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  background-color: #2b1558;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease;
  z-index: 999;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin-top: 0.5rem;
  opacity: 0;
  
  &.open {
    max-height: 80vh;
    overflow-y: auto;
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    width: 290px;
    right: -10px;
  }
  
  @media (max-width: 480px) {
    width: calc(100vw - 40px);
    right: -15px;
  }
  
  @media (max-width: 360px) {
    width: calc(100vw - 20px);
    right: -10px;
  }
`;

const DropdownContainer = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

export default HomePage;
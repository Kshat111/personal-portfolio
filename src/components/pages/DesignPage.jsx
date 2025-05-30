import styled from 'styled-components';
import Container from '../shared/Container';

const DesignPage = () => {
  const designs = [
    { 
      id: 1, 
      image: '/src/assets/designs/design1.png', 
      alt: 'Dashboard UI Design for Disaster Alerting System',
      figmaLink: 'https://www.figma.com/design/WAfYfIfFlNqtbq1sbH4otF/disaster-alerting-system?node-id=0-1&t=MEK1eOb1Z65bwgez-1'
    },
    { 
      id: 2, 
      image: '/src/assets/designs/design2.png', 
      alt: 'Old Portfolio Design',
      figmaLink: 'https://www.figma.com/proto/qALhvdMPyywLMQaJSPpIYR/portfolio_designauts_onlycoreteam?node-id=7-3&starting-point-node-id=7%3A3&t=k490mBKKojzl63Ys-1'
    },

    { 
      id: 3, 
      image: '/src/assets/designs/design3.png', 
      alt: 'Chatbot Design - BOBGenie',
      figmaLink: 'https://www.figma.com/proto/BQciZQo55xMcC0OfQBmZsk/BOB-chatbot?node-id=722-2398&starting-point-node-id=722%3A2398&t=qqBHSjJNPIfRZ0yZ-1'
    },
    { 
      id: 4, 
      image: '/src/assets/designs/Screenshot 2025-05-30 132227.png', 
      alt: 'Chainsaw Man'
    },
    { 
      id: 5, 
      image: '/src/assets/designs/Screenshot 2025-05-30 132254.png', 
      alt: 'Adopting Happiness',
    },
    { 
      id: 6, 
      image: '/src/assets/designs/Screenshot 2025-05-30 132237.png', 
      alt: 'Rebel Kid',
    },
    { 
      id: 7, 
      image: '/src/assets/designs/Screenshot 2025-05-30 132309.png', 
      alt: 'Bombardino Crocodilo',
    },
    { 
      id: 8, 
      image: '/src/assets/designs/Screenshot 2025-05-30 132325.png', 
      alt: 'Character Design',
    },
    { 
      id: 9, 
      image: '/src/assets/designs/Screenshot 2025-05-30 132335.png', 
      alt: 'Character Design',
    },

  ];

  return (
    <PageWrapper>
      <Container>
        <Title>Design Work</Title>
        <IntroText>The illustrations below are personal work.</IntroText>
        <Gallery>
          {designs.map((item) => (
            <GalleryItem key={item.id}>
              <ImageContainer>
                <ImageWrapper href={item.figmaLink} target="_blank" rel="noopener noreferrer" $isLink={!!item.figmaLink}>
                  <Image src={item.image} alt={item.alt} loading="lazy" />
                  {item.figmaLink && (
                    <FigmaOverlay>
                      <FigmaIcon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12Z" fill="currentColor"/>
                          <path d="M6 18C6 16.3431 7.34315 15 9 15H12V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18Z" fill="currentColor"/>
                          <path d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z" fill="currentColor"/>
                          <path d="M6 6C6 7.65685 7.34315 9 9 9H12V3H9C7.34315 3 6 4.34315 6 6Z" fill="currentColor"/>
                          <path d="M6 12C6 13.6569 7.34315 15 9 15H12V9H9C7.34315 9 6 10.3431 6 12Z" fill="currentColor"/>
                        </svg>
                      </FigmaIcon>
                      <FigmaText>View in Figma</FigmaText>
                    </FigmaOverlay>
                  )}
                </ImageWrapper>
              </ImageContainer>
              <Caption>{item.alt}</Caption>
            </GalleryItem>
          ))}
        </Gallery>
        <InstagramLink href="https://www.instagram.com/axatdraws?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <InstagramIcon>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
            </svg>
          </InstagramIcon>
          More on Instagram
        </InstagramLink>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding: var(--spacing-xl) 0;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: var(--spacing-md);
`;

const IntroText = styled.p`
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  font-size: 1.1rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const ImageContainer = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-md);
  position: relative;
`;

const ImageWrapper = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: ${props => props.$isLink ? 'pointer' : 'default'};
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.$isLink ? 'scale(1.02)' : 'none'};
  }

  &:hover > div {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
  line-height: 1.4;
`;

const FigmaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
`;

const FigmaIcon = styled.div`
  margin-bottom: 8px;
  color: white;
`;

const FigmaText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const InstagramLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const InstagramIcon = styled.div`
  display: flex;
  align-items: center;
  color: currentColor;
`;

export default DesignPage; 
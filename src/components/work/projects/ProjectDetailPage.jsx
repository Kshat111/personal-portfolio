import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Container from '../../shared/Container';
import { allProjects } from '../projectsData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState('');

  if (!project) {
    return (
      <Container>
        <ErrorMessage>Project not found</ErrorMessage>
      </Container>
    );
  }

  return (
    <DetailPageContainer>
      <Container>
        <BackButton onClick={() => navigate('/work')}>← Back to Projects</BackButton>

        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectYear>{project.year}</ProjectYear>
        </ProjectHeader>

        <ProjectContent>
          <HeroImage src={project.image} alt={project.title} />

          <Section>
            <SectionTitle>Overview</SectionTitle>
            <Description>{project.description}</Description>
          </Section>

          <Section>
            <SectionTitle>Problem Statement</SectionTitle>
            <Description>{project.problemStatement}</Description>
          </Section>

          <Section>
            <SectionTitle>Solution</SectionTitle>
            <Description>{project.solution}</Description>
          </Section>

          <Section>
            <SectionTitle>Approach</SectionTitle>
            <Description>{project.approach}</Description>
          </Section>

          {project.additionalImages && (
            <Section>
              <SectionTitle>Gallery</SectionTitle>
              <ImageGrid>
                {project.additionalImages.map((img, index) => (
                  <GalleryImage
                    key={index}
                    src={img.url}
                    alt={img.caption}
                    onClick={() => {
                      setSelectedImage(img.url);
                      setSelectedCaption(img.caption);
                    }}
                  />
                ))}
              </ImageGrid>
            </Section>
          )}

          <Section>
            <SectionTitle>Links</SectionTitle>
            <LinksContainer>
              {project.links.map((link, index) => (
                <ProjectLink
                  key={index}
                  href={link.url}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                >
                  {link.text} →
                </ProjectLink>
              ))}
            </LinksContainer>
          </Section>
        </ProjectContent>
      </Container>

      {selectedImage && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setSelectedImage(null)}>← Back to Project</CloseButton>
            <LargeImage src={selectedImage} alt={selectedCaption} />
            <ImageCaption>{selectedCaption}</ImageCaption>
          </ModalContent>
        </ModalOverlay>
      )}
    </DetailPageContainer>
  );
};

const DetailPageContainer = styled.div`
  padding: 4rem 0;
  min-height: 100vh;
  background: #59659D;
  color: #ffffff;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #6FE7D6;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #48c9b0;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ProjectYear = styled.div`
  font-size: 1.2rem;
  color: #000000;
`;

const ProjectContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #6FE7D6;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #cccccc;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  color: #6FE7D6;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #48c9b0;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  margin-top: 4rem;
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  text-align: center;
  background: #2e2e2e;
  padding: 2rem;
  border-radius: 12px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
`;

const LargeImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

const ImageCaption = styled.p`
  color: #cccccc;
  font-size: 1.1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6FE7D6;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:hover {
    color: #48c9b0;
  }
`;

export default ProjectDetailPage;

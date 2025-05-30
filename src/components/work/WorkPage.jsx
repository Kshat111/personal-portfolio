import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../shared/Container';
import { allProjects } from './projectsData';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const allCategories = ["All", "Design", "Development", "UI/UX", "Mobile", "Side Project"];

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isAnimating, setIsAnimating] = useState(false);
  const workGridRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      if (activeFilter === "All") {
        setFilteredProjects(allProjects);
      } else {
        setFilteredProjects(
          allProjects.filter(project => 
            project.category.includes(activeFilter)
          )
        );
      }
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-header', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.project-item', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5
      });
    });

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (projectId, event) => {
    // Check if the click target is a link
    const isLink = event.target.tagName.toLowerCase() === 'a' || 
                  event.target.closest('a');
    
    // Only navigate to project detail if the click wasn't on a link
    if (!isLink) {
      navigate(`/work/${projectId}`);
    }
  };

  return (
    <WorkPageContainer>
      <Container>
        <WorkHeader className="work-header">
          <WorkTitle>SELECT WORKS</WorkTitle>
        </WorkHeader>

        <WorkGrid 
          ref={workGridRef} 
          className={isAnimating ? 'animating' : ''}
        >
          {filteredProjects.map(project => (
            <ProjectItem 
              key={project.id} 
              className="project-item"
              onClick={(e) => handleProjectClick(project.id, e)}
            >
              <ProjectImageContainer>
                <ProjectImage 
                  src={project.image}
                  alt={project.title}
                  style={{ 
                    backgroundColor: `hsl(${project.id * 40}, 70%, 60%)`
                  }} 
                />
              </ProjectImageContainer>

              <ProjectInfo>
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectHeader>

                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectActions>
                  {project.links?.map((link, idx) => (
                    <ActionLink
                      key={idx}
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.text}
                    </ActionLink>
                  ))}
                </ProjectActions>
              </ProjectInfo>
            </ProjectItem>
          ))}
        </WorkGrid>
      </Container>
    </WorkPageContainer>
  );
};

// Styled Components

const WorkPageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

const WorkTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  &.animating {
    opacity: 0.5;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled.article`
  background: #59659D;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #f8f9fa;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectItem}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionLink = styled.a`
  font-size: 0.85rem;
  color: #6FE7D6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #48c9b0;
  }
`;

export default WorkPage;

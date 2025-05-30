import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../shared/Container';
import Button from '../shared/Button';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headerRef = useRef(null);
  const bioRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Bio section animation
      gsap.from(bioRef.current, {
        scrollTrigger: {
          trigger: bioRef.current,
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Timeline animation
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%'
        },
        x: index => index % 2 === 0 ? -50 : 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Skills animation
      gsap.from('.skill-bar', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 70%'
        },
        width: '0%',
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const skills = [

    { 
      name: 'JavaScript',
      icon: '/public/assets/icons/js.png',
      category: 'Languages'
    },
    { 
      name: 'C++',
      icon: '/public/assets/icons/cpp.png',
      category: 'Languages'
    },
    { 
      name: 'TypeScript',
      icon: '/public/assets/icons/typescript.png',
      category: 'Languages'
    },
    { 
      name: 'Java',
      icon: '/public/assets/icons/java.png',
      category: 'Languages'
    },
    { 
      name: 'Python',
      icon: '/public/assets/icons/python.png',
      category: 'Languages'
    },
    { 
      name: 'HTML5',
      icon: '/public/assets/icons/html.png',
      category: 'Frontend'
    },
    { 
      name: 'CSS3',
      icon: '/public/assets/icons/css.png',
      category: 'Frontend'
    },
    { 
      name: 'React',
      icon: '/public/assets/icons/react.png',
      category: 'Frontend'
    },
    {
      name: 'Redux',
      icon: '/public/assets/icons/redux.png',
      category: 'Frontend'
    },
    {
      name: 'Bootstrap',
      icon: '/public/assets/icons/bootstrap.png',
      category: 'Frontend'
    },
    {
      name: 'Tailwind CSS',
      icon: '/public/assets/icons/tailwind.png',
      category: 'Frontend'
    },
    {
      name: 'Shadcn UI',
      icon: '/public/assets/icons/shadcn.png',
      category: 'Frontend'
    },
    {
      name: 'Streamlit',
      icon: '/public/assets/icons/streamlit.png',
      category: 'Frontend'
    },
    {
      name: 'Vaadin',
      icon: '/public/assets/icons/vaadin.png',
      category: 'Frontend'
    },
    {
      name: 'Three JS',
      icon: '/public/assets/icons/threejs.png',
      category: 'Frontend'
    },    {
      name: 'GSAP',
      icon: '/public/assets/icons/gsap.jpg',
      category: 'Frontend'
    },
    {
      name: 'NodeJS',
      icon: '/public/assets/icons/nodejs.png',
      category: 'Backend'
    },
    {
      name: 'Cloudinary',
      icon: '/public/assets/icons/cloudinary.png',
      category: 'Backend'
    },
    {
      name: 'ExpressJS',
      icon: '/public/assets/icons/express.png',
      category: 'Backend'
    },
    {
      name: 'NextJS',
      icon: '/public/assets/icons/nextjs.png',
      category: 'Backend'
    },
    {
      name: 'Nodemailer',
      icon: '/public/assets/icons/nodemailer.png',
      category: 'Backend'
    },
    {
      name: 'Postman',
      icon: '/public/assets/icons/postman.png',
      category: 'Backend'
    },
    {
      name: 'FastAPI',
      icon: '/public/assets/icons/fastapi.png',
      category: 'Backend'
    },
    {
      name: 'Spring Boot',
      icon: '/public/assets/icons/springboot.png',
      category: 'Backend'
    },
    {
      name: 'MongoDB',
      icon: '/public/assets/icons/mongodb.png',
      category: 'Database'
    },
    {
      name: 'MySQL',
      icon: '/public/assets/icons/mysql.png',
      category: 'Database'
    },
    {
      name: 'PostgreSQL',
      icon: '/public/assets/icons/postgresql.png',
      category: 'Database'
    },
    {
      name: 'Firebase',
      icon: '/public/assets/icons/firebase.png',
      category: 'Database'
    },
    {
      name: 'Mongoose',
      icon: '/public/assets/icons/mongoose.jpg',
      category: 'Database'
    },
    {
      name: 'AWS',
      icon: '/public/assets/icons/aws.png',
      category: 'DevOps and Cloud'
    },
    {
      name: 'Docker',
      icon: '/public/assets/icons/docker.png',
      category: 'DevOps and Cloud'
    },
    {
      name: 'GCP',
      icon: '/public/assets/icons/gcp.png',
      category: 'DevOps and Cloud'
    },
    {
      name: 'Git',
      icon: '/public/assets/icons/git.jpg',
      category: 'DevOps and Cloud'
    },
    {
      name: 'GitHub',
      icon: '/public/assets/icons/github.jpg',
      category: 'DevOps and Cloud'
    },
    {
      name: 'Kubernetes',
      icon: '/public/assets/icons/kubernetes.png',
      category: 'DevOps and Cloud'
    },
    {
      name: 'Ubuntu',
      icon: '/public/assets/icons/ubuntu.png',
      category: 'DevOps and Cloud'
    },
    {
      name: 'Jenkins',
      icon: '/public/assets/icons/jenkins.png',
      category: 'DevOps and Cloud'
    },
    {
      name: 'Vercel',
      icon: '/public/assets/icons/vercel.png',
      category: 'DevOps and Cloud'
    },   
    {
      name: 'Adobe Photoshop',
      icon: '/public/assets/icons/adobephotoshop.png',
      category: 'Design'
    }, 
    {
      name: 'Adobe Illustrator',
      icon: '/public/assets/icons/adobeillustrator.png',
      category: 'Design'
    }, 
    {
      name: 'Figma',
      icon: '/public/assets/icons/figma.png',
      category: 'Design'
    }, 
    {
      name: 'Blender',
      icon: '/public/assets/icons/blender.png',
      category: 'Design'
    }, 
    {
      name: 'Google Colab',
      icon: '/public/assets/icons/colab.png',
      category: 'Other Tools'
    }, 
    {
      name: 'Jira',
      icon: '/public/assets/icons/jira.png',
      category: 'Other Tools'
    }, 
    {
      name: 'Pytorch',
      icon: '/public/assets/icons/pytorch.png',
      category: 'Other Tools'
    }, 
    {
      name: 'Roboflow',
      icon: '/public/assets/icons/roboflow.png',
      category: 'Other Tools'
    },     
    {
      name: 'Tensorflow',
      icon: '/public/assets/icons/tensorflow.png',
      category: 'Other Tools'
    }, 
    {
      name: 'VS Code',
      icon: '/public/assets/icons/vscode.png',
      category: 'Other Tools'
    }, 
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <AboutContainer>
      <Container>
        <AboutHeader ref={headerRef}>
          <h1>About Me</h1>
          <p>Creative developer blending technical depth with design precision</p>
        </AboutHeader>

        <AboutGrid>
          <AboutBio ref={bioRef}>
            <BioContent>
              <h2>Hello there!</h2>
              <p>
              I'm Akshat Singh, a final-year engineering student at the Indian Institute of Technology (IIT) Mandi. With a strong foundation in Computer Science and Data Science, I combine academic depth with hands-on project-based learning.
              </p>
              <p>
              My technical toolkit spans across full-stack Web Development, while my interest in AI has led me to explore Machine Learning and Deep Learning algorithms—developing solutions that are both data-driven and user-focused.
              </p>
              <p>
              I'm a strong advocate of project-based learning and believe that the best way to grow is by building. Whether it's designing the architecture of a system or visualizing data through interactive experiences, I approach every project with curiosity and intent.
              </p>
              <p>
              Beyond code, I have a keen eye for design, with a passion for UI/UX, digital art, and sketching, which fuels my creativity in building intuitive and visually engaging experiences.
              </p>

              <BioActions>
                <Button to="/contact">Get in Touch</Button>
                <Button
  as="a"
  href="/AkshatSingh_resume_iitmandi.pdf"
  // download
  target="_blank"
  rel="noopener noreferrer"
  variant="secondary"
>
  View Resume
</Button>


              </BioActions>
            </BioContent>
          </AboutBio>

          <AboutImage>
            <span><img src="/assets/images/about-pic.jpg" alt="" /></span>
          </AboutImage>
        </AboutGrid>


        {/* Skills Section */}
        <SkillsSection ref={skillsRef}>
          <SectionTitle>Technical Skills</SectionTitle>
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <SkillCategory key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillIcon>
                      <img src={skill.icon} alt={`${skill.name} icon`} />
                    </SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsGrid>
            </SkillCategory>
          ))}
        </SkillsSection>
      </Container>
    </AboutContainer>
  );
};

// Styled Components

const AboutContainer = styled.div`
  padding: var(--spacing-xl) 0;
`;

const AboutHeader = styled.div`
  text-align: left;
  margin-bottom: var(--spacing-xl);

  h1 {
    margin-bottom: var(--spacing-xs);
  }

  p {
    font-size: 1.25rem;
    color: var(--text-secondary);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutBio = styled.div`
  position: relative;
`;

const BioContent = styled.div`
  text-align: left;

  h2 {
    margin-bottom: var(--spacing-md);
    color: var(--accent);
  }

  p {
    margin-bottom: var(--spacing-md);
    font-size: 1.125rem;
    line-height: 1.7;
  }
`;

const BioActions = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
  justify-content: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AboutImage = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;



const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;




const SkillsSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SkillCategory = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const CategoryTitle = styled.h3`
  color: var(--accent);
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-mono);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-lg);
  justify-items: center;
  align-items: start;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  padding: var(--spacing-sm);
  border-radius: var(--radius-lg);
  background: var(--background-secondary);
  
  &:hover {
    transform: translateY(-5px);
    background: var(--background-light);
  }
`;

const SkillIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: var(--spacing-sm);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SkillName = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

export default AboutPage;

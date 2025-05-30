import styled from 'styled-components';
import Container from '../shared/Container';

const CoursesPage = () => {
  const courses = [
    {
      title: "LINEAR ALGEBRA",
      description: "Matrix theory, vector spaces, and linear transformations.",
      color: "#f7b267"
    },
    {
      title: "COMPLEX AND VECTOR CALCULUS",
      description: "Calculus with complex numbers and vector fields.",
      color: "#6a0572"
    },
    {
      title: "ODE AND INTEGRAL TRANSFORMS",
      description: "Solving differential equations using Laplace and Fourier methods.",
      color: "#e63946"
    },
    {
      title: "PROBABILITY AND STATISTICS",
      description: "Foundations of probability theory and statistical inference.",
      color: "#ff6f61"
    },
    {
      title: "PYTHON PROGRAMMING",
      description: "Programming essentials using Python for data and systems.",
      color: "#306998"
    },
    {
      title: "DATA STRUCTURES AND ALGORITHMS",
      description: "Fundamental algorithms and data structure implementations.",
      color: "#2a9d8f"
    },
    {
      title: "MATHEMATICAL FOUNDATIONS OF COMPUTER SCIENCE",
      description: "Logic, set theory, and discrete structures in computing.",
      color: "#bc6c25"
    },
    {
      title: "DESIGN AND ANALYSIS OF ALGORITHMS",
      description: "Efficient algorithm design and performance analysis.",
      color: "#4a4e69"
    },
    {
      title: "COMPUTER ORGANIZATION",
      description: "Understanding computer architecture and low-level design.",
      color: "#00b4d8"
    },
    {
      title: "MACHINE LEARNING",
      description: "Building predictive models from data using ML techniques.",
      color: "#f77f00"
    },
    {
      title: "FORMAL LANGUAGES AND AUTOMATA THEORY",
      description: "Languages, grammars, and the theory of computation.",
      color: "#8338ec"
    },
    {
      title: "INFORMATION AND DATA SYSTEMS",
      description: "Storing, managing, and retrieving structured data.",
      color: "#118ab2"
    },
    {
      title: "MATHEMATICAL FOUNDATIONS OF DATA SCIENCE",
      description: "Math tools behind data modeling and machine learning.",
      color: "#ff9f1c"
    },
    {
      title: "OPERATING SYSTEMS",
      description: "Processes, memory, and system resource management.",
      color: "#6d6875"
    },
    {
      title: "COMPUTER NETWORKS",
      description: "Network protocols, routing, and internet communication.",
      color: "#2c6e49"
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      description: "Techniques for intelligent agent design and decision-making.",
      color: "#ef476f"
    },
    {
      title: "INTRODUCTION TO STATISTICAL LEARNING",
      description: "Statistical methods for machine learning and data science.",
      color: "#1982c4"
    },
    {
      title: "SOFTWARE ENGINEERING",
      description: "Software lifecycle, agile methods, and project management.",
      color: "#6f1d1b"
    },
    {
      title: "PARADIGMS OF PROGRAMMING",
      description: "Exploring functional, procedural, and object-oriented styles.",
      color: "#ff7f51"
    },
    {
      title: "OPTIMIZATION FOR DATA SCIENCE",
      description: "Mathematical optimization techniques for data modeling.",
      color: "#7209b7"
    },
    {
      title: "INFORMATION SECURITY AND PRIVACY",
      description: "Principles of secure systems and data protection.",
      color: "#14213d"
    },
    {
      title: "DEEP LEARNING AND ITS APPLICATIONS",
      description: "Neural networks and deep learning models in practice.",
      color: "#9d4edd"
    },
    {
      title: "FULL STACK DEVELOPMENT",
      description: "Building complete web applications from front to back.",
      color: "#ff595e"
    },
    {
      title: "SYSTEM DESIGN",
      description: "Architecting scalable and maintainable software systems.",
      color: "#3a0ca3"
    },
    {
      title: "UX/UI DESIGN",
      description: "Designing user-friendly and visually appealing interfaces.",
      color: "#ffb703"
    },
    {
      title: "JAVA PROGRAMMING",
      description: "Object-oriented programming and application development in Java.",
      color: "#0077b6"
    },
    {
      title: "REVERSE ENGINEERING",
      description: "Analyzing software structure to uncover inner workings.",
      color: "#495057"
    }
  ];
  

  return (
    <PageWrapper>
      <Container>
        <Title>Core CS Fundamentals</Title>
        <Description>
          A collection of computer science courses and learning materials I've studied.
        </Description>
        <CourseGrid>
          {courses.map((course, index) => (
            <CourseItem key={index}>
              <CourseColor style={{ backgroundColor: course.color }} />
              <CourseContent>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>{course.description}</CourseDescription>
              </CourseContent>
            </CourseItem>
          ))}
        </CourseGrid>
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

const Description = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  color: var(--text-secondary);
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const CourseItem = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  background:rgb(53, 62, 100); // brighter card background
  display: flex;
  height: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); // subtle elevation
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15); // stronger on hover
  }
`;

const CourseColor = styled.div`
  width: 10px;
  height: 100%;
  background-color: #ccc; // fallback if inline style is missing
  flex-shrink: 0;
`;

const CourseContent = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CourseTitle = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #ffffff; // darker for better readability
  font-weight: 600;
`;

const CourseDescription = styled.p`
  color: #rgba(255, 255, 255, 0.1); // improved contrast
  font-size: 0.95rem;
  line-height: 1.5;
`;


export default CoursesPage; 
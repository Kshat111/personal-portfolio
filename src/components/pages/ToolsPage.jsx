import styled from 'styled-components';
import Container from '../shared/Container';

const ToolsPage = () => {
  const tools = [
    {
      name: "FIGMA",
      icon: "/assets/icons/figma.png",
      description: "My design playground. I use Figma to create wireframes, prototypes, and components—all while collaborating in real-time with teammates."
    },
    {
      name: "TASKSBOARD",
      icon: "/assets/icons/tasksboard.png",
      description: "I use it to manage personal projects and daily to-dos—everything stays synced with my Google account."
    },
    {
      name: "NAPKIN AI",
      icon: "/assets/icons/napkin.jpg",
      description: "Napkin helps me capture thoughts and auto-organizes them with AI. It even lets you run prompts to extract ideas or insights from your notes."
    },
    {
      name: "CANVA",
      icon: "/assets/icons/canva.png",
      description: "When I need quick, beautiful visuals—social posts, decks, or mockups—Canva is my go-to. It's simple, fast, and surprisingly powerful."
    },
    {
      name: "PINTEREST",
      icon: "/assets/icons/pinterest.png",
      description: "My go-to moodboarding tool. I collect design inspo, reference styles, and organize ideas visually for any project or creative spark."
    },
    {
      name: "REPLIT",
      icon: "/assets/icons/replit.png",
      description: "Replit lets me code from anywhere in the browser—no setup needed. I prototype, test, and deploy small apps right from the cloud."
    },
    {
      name: "CURSOR",
      icon: "/assets/icons/cursor.jpg",
      description: "Cursor is like a supercharged coding buddy powered by AI. It helps me write, refactor, and debug code with contextual intelligence."
    },
    {
      name: "STRAVA",
      icon: "/assets/icons/strava.png",
      description: "My digital running and cycling diary. I track workouts, set goals, and geek out on stats—all while staying connected with fellow athletes."
    }
  ];
  

  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>TOOLS</Title>
          <Subtitle>Some of my favorite digital tools</Subtitle>
        </Header>
        <ToolsList>
          {tools.map((tool, index) => (
            <ToolItem key={index}>
              <ToolIcon src={tool.icon} alt={tool.name} />
              <ToolContent>
                <ToolName>{tool.name}</ToolName>
                <ToolDescription>{tool.description}</ToolDescription>
              </ToolContent>
            </ToolItem>
          ))}
        </ToolsList>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const ToolsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ToolItem = styled.div`
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  text-align: left;
`;

const ToolIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  flex-shrink: 0;
`;

const ToolContent = styled.div`
  flex: 1;
`;

const ToolName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const ToolDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

export default ToolsPage; 
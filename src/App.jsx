import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import WorkPage from './components/work/WorkPage';
import ProjectDetailPage from './components/work/projects/ProjectDetailPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import DesignPage from './components/pages/DesignPage';
import DrawingPage from './components/pages/DrawingPage';
import CoursesPage from './components/pages/CoursesPage';
import ToolsPage from './components/pages/ToolsPage';
import PostsPage from './components/pages/PostsPage';
import './App.css'
import './styles/Home.css'

// Placeholder pages for other sections
const ReadingPage = () => <div style={{minHeight: '80vh', padding: '100px 20px'}}>Reading Page</div>;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:id" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thoughts" element={<PostsPage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/drawing" element={<DrawingPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/tools" element={<ToolsPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

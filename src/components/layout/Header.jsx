import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Container from '../shared/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Menu animation
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuContainerRef.current && 
        !menuContainerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  return (
    <HeaderWrapper ref={headerRef}>
      <Container>
        <HeaderContent>
          <Logo to="/">
            <img src="src/assets/images/profile-icon.svg" alt="logo" />
          </Logo>
          
          {/* Desktop Navigation */}
          <NavList>
            <NavItem>
              <NavLink to="/work" className={pathname.includes('/work') || pathname === '/' ? 'active' : ''}>
                Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className={pathname === '/about' ? 'active' : ''}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className={pathname === '/contact' ? 'active' : ''}>
                Contact
              </NavLink>
            </NavItem>
          </NavList>
          
          {/* Menu Toggle - Always visible */}
          <MenuContainer ref={menuContainerRef}>
            <MenuToggle onClick={toggleMenu} className={isMenuOpen ? 'active' : ''}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
                ) : (
                  <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="white"/>
                )}
              </svg>
            </MenuToggle>
            
            {/* Dropdown Menu */}
            <DropdownMenu className={isMenuOpen ? 'open' : ''} ref={menuRef}>
              <DropdownContainer>
                <MenuSection>
                  <MenuLink to="/thoughts" onClick={() => setIsMenuOpen(false)}>
                    <MenuTitle>Thoughts</MenuTitle>
                  </MenuLink>
                </MenuSection>
                
                <MenuSection>
                  <MenuLink to="/courses" onClick={() => setIsMenuOpen(false)}>
                    <MenuTitle>Courses</MenuTitle>
                  </MenuLink>
                </MenuSection>
                
                <MenuSection>
                  <MenuLink to="/tools" onClick={() => setIsMenuOpen(false)}>
                    <MenuTitle>Tools</MenuTitle>
                  </MenuLink>
                </MenuSection>

                <MenuSection>
                  <MenuLink to="/drawing" onClick={() => setIsMenuOpen(false)}>
                    <MenuTitle>Drawings</MenuTitle>
                  </MenuLink>
                </MenuSection>
                
                <MenuSection>
                  <MenuLink to="/design" onClick={() => setIsMenuOpen(false)}>
                    <MenuTitle>Designs</MenuTitle>
                  </MenuLink>
                </MenuSection>
                <MenuSection>
                  <MenuLink to="/about" onClick={() => setIsMenuOpen(false)}>
                    <MenuTitle>About Me</MenuTitle>
                  </MenuLink>
                </MenuSection>
                <MenuSection>
                  <MenuLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <MenuTitle>Contact</MenuTitle>
                  </MenuLink>
                </MenuSection>
              </DropdownContainer>
            </DropdownMenu>
          </MenuContainer>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #0A0B2A;
  padding: 1.25rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  position: relative;
  z-index: 1001;
`;

const LogoText = styled.div`
  font-weight: 700;
  font-size: 1.75rem;
  color: white;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  position: relative;
  border-radius: 5px;
  transition: background-color var(--transition-fast);
  
  &.active {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
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

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
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
  transition: max-height 0.5s ease;
  z-index: 999;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin-top: 0.5rem;
  
  &.open {
    max-height: 80vh;
    overflow-y: auto;
  }
  
  @media (max-width: 768px) {
    width: 290px;
    right: -20px;
  }
`;

const DropdownContainer = styled.div`
  padding: 1.5rem;
`;

const MenuSection = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: white;
  padding: 1rem;
`;

const MenuTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

const MenuPreview = styled.div`
  width: 100%;
`;

// Drawing section
const DrawingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.25rem;
`;

const DrawingImage = styled.div`
  border-radius: 6px;
  aspect-ratio: 1/1;
`;

// Reading section
const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
`;

const BookCover = styled.div`
  border-radius: 3px;
  aspect-ratio: 2/3;
`;

// Tools section
const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem;
`;

const ToolIcon = styled.div`
  border-radius: 6px;
  aspect-ratio: 1/1;
`;

// Article preview
const ArticlePreview = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 0.75rem;
  border-radius: 6px;
`;

const ArticleTitle = styled.h4`
  font-size: 0.9rem;
  margin: 0 0 0.3rem 0;
  font-weight: 600;
`;

const ArticleExcerpt = styled.p`
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.8;
`;

// Now section
const NowCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 0.75rem;
  border-radius: 6px;
`;

const NowTitle = styled.h4`
  font-size: 0.9rem;
  margin: 0 0 0.2rem 0;
  font-weight: 600;
`;

const NowDate = styled.div`
  font-size: 0.7rem;
  margin-bottom: 0.4rem;
  opacity: 0.7;
`;

const NowText = styled.p`
  font-size: 0.8rem;
  margin: 0 0 0.2rem 0;
`;

export default Header;
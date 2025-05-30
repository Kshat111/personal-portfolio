import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { useTheme } from '../../hooks/useTheme';
import gsap from 'gsap';
import styled from 'styled-components';

// Abstract shape that will animate and respond to mouse movement
const AbstractShape = ({ mousePosition, isDarkMode }) => {
  const meshRef = useRef();
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const timelineRef = useRef();
  
  // Rotate the shape based on mouse position
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth follow mouse
      meshRef.current.rotation.y += (mousePosition.x * 0.5 - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.x += (mousePosition.y * 0.5 - meshRef.current.rotation.x) * 0.1;
      
      // Add some constant rotation
      meshRef.current.rotation.z += delta * 0.15;
    }
  });
  
  // Theme change effect
  useEffect(() => {
    if (meshRef.current) {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      
      timelineRef.current = gsap.timeline();
      timelineRef.current.to(meshRef.current.material, {
        emissiveIntensity: isDarkMode ? 0.5 : 0.3,
        duration: 1,
        ease: 'power2.inOut'
      });
    }
  }, [isDarkMode]);
  
  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshPhysicalMaterial 
        color={isDarkMode ? '#6f42c1' : '#9c27b0'} 
        emissive={isDarkMode ? '#6f42c1' : '#9c27b0'}
        emissiveIntensity={isDarkMode ? 0.5 : 0.3}
        roughness={0.5}
        metalness={0.8}
        wireframe={true}
      />
    </mesh>
  );
};

// Alternative shape for variety
const FloatingGeo = ({ position, rotation, scale, color, geometry = 'octahedron' }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Just add gentle rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  
  // Render different geometries based on the prop
  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[1, 16, 16]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.3, 16, 32]} />;
      default:
        return <octahedronGeometry args={[1]} />;
    }
  };
  
  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial color={color} roughness={0.5} wireframe={true} />
    </mesh>
  );
};

// Main component that brings together 3D elements
const ThreeDObject = ({ style, className }) => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate normalized mouse position (-1 to 1)
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      setMousePosition({ x, y });
    }
  };
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    gsap.to(mousePosition, {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      onUpdate: () => setMousePosition({ ...mousePosition })
    });
  };
  
  return (
    <CanvasContainer 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={className}
      isDarkMode={isDarkMode}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={isDarkMode ? 0.4 : 0.7} />
        <pointLight position={[10, 10, 10]} intensity={isDarkMode ? 0.6 : 1.0} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <AbstractShape mousePosition={mousePosition} isDarkMode={isDarkMode} />
        </Float>
        
        {/* Add some smaller elements in the background */}
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
          <FloatingGeo 
            position={[-2.5, 1.5, -2]} 
            rotation={[0.5, 0.5, 0]} 
            scale={[0.2, 0.2, 0.2]} 
            color="#ba68c8" 
            geometry="box"
          />
        </Float>
        
        <Float speed={3} rotationIntensity={3} floatIntensity={1.5}>
          <FloatingGeo 
            position={[3, -1, -3]} 
            rotation={[0.3, 0.4, 0]} 
            scale={[0.3, 0.3, 0.3]} 
            color="#9c27b0" 
            geometry="torus"
          />
        </Float>
        
        <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
          <FloatingGeo 
            position={[2, 1.5, -1]} 
            rotation={[0.1, 0.2, 0]} 
            scale={[0.15, 0.15, 0.15]} 
            color="#6f42c1" 
            geometry="sphere"
          />
        </Float>
        
        <Environment preset={isDarkMode ? "night" : "sunset"} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.isDarkMode ? 
    'radial-gradient(circle at center, rgba(111, 66, 193, 0.15), transparent 60%)' : 
    'radial-gradient(circle at center, rgba(186, 104, 200, 0.15), transparent 60%)'
  };
  transition: background var(--transition-normal);
`;

export default ThreeDObject; 
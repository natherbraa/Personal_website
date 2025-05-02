import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import '../styles/Background3D.css';

// Mouse position for interactive particles
const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

// Particle Component
const Particles = ({ count = 2000 }) => {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  const mousePos = MousePosition();

  // Create particles
  const particlesPosition = new Float32Array(count * 3);
  const particlesScale = new Float32Array(count);
  const particlesColor = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    particlesPosition[i3] = (Math.random() - 0.5) * 10;
    particlesPosition[i3 + 1] = (Math.random() - 0.5) * 10;
    particlesPosition[i3 + 2] = (Math.random() - 0.5) * 10;
    particlesScale[i] = Math.random();

    // Random colors with teal bias
    particlesColor[i3] = 0.1 + Math.random() * 0.1; // R
    particlesColor[i3 + 1] = 0.7 + Math.random() * 0.3; // G
    particlesColor[i3 + 2] = 0.6 + Math.random() * 0.4; // B
  }

  useFrame((state) => {
    const { clock } = state;

    if (mesh.current) {
      // Add mouse influence to rotation
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1 + mousePos.y * 0.05;
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1 + mousePos.x * 0.05;

      // Subtle movement based on mouse position
      mesh.current.position.x = mousePos.x * 0.3;
      mesh.current.position.y = mousePos.y * 0.3;
    }

    if (light.current) {
      // Light follows mouse with some delay
      light.current.position.x = Math.sin(clock.getElapsedTime() * 0.6) * 3 + mousePos.x * 2;
      light.current.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 3 + mousePos.y * 2;
      light.current.position.z = Math.sin(clock.getElapsedTime() * 0.5) * 3;

      // Change light intensity based on mouse movement
      light.current.intensity = 2 + Math.abs(mousePos.x + mousePos.y) * 0.5;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={6} intensity={2} color="#1abc9c" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-scale"
            count={particlesScale.length}
            array={particlesScale}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particlesColor.length / 3}
            array={particlesColor}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          sizeAttenuation
          transparent
          depthWrite={false}
        />
      </points>
    </>
  );
};

// Main Background Component
const Background3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="background-3d">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <Particles count={isMobile ? 1000 : 2000} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} intensity={0.5} levels={9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Background3D;

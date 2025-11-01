import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MatrixRain() {
  const meshRef = useRef();
  const particlesCount = 1000;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      const color = Math.random() > 0.7 ? new THREE.Color(0xff00ff) : new THREE.Color(0x00ffff);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 1] -= 0.05;
        
        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 10;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.6} />
    </points>
  );
}

function GridLines() {
  const gridRef = useRef();
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 2) % 2;
    }
  });
  
  return (
    <group ref={gridRef}>
      <gridHelper args={[20, 20, 0x00ffff, 0xff00ff]} position={[0, -5, 0]} />
    </group>
  );
}

export default function CyberpunkBackground() {
  return (
    <div className="matrix-bg">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <MatrixRain />
        <GridLines />
      </Canvas>
    </div>
  );
}
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 1000;

export default function ParticleField({ mousePosition }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ],
        velocity: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ]
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      particle.position[0] += particle.velocity[0];
      particle.position[1] += particle.velocity[1];
      particle.position[2] += particle.velocity[2];

      // Mouse interaction
      const mouseInfluence = 0.001;
      particle.position[0] += mousePosition.x * mouseInfluence;
      particle.position[1] += mousePosition.y * mouseInfluence;

      // Boundary wrapping
      if (Math.abs(particle.position[0]) > 50) particle.position[0] *= -1;
      if (Math.abs(particle.position[1]) > 50) particle.position[1] *= -1;
      if (Math.abs(particle.position[2]) > 50) particle.position[2] *= -1;

      dummy.position.set(...particle.position);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, PARTICLE_COUNT]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="#00ffff" transparent opacity={0.6} />
    </instancedMesh>
  );
}
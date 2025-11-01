import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function FloatingObjects() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[5, 2, -5]} onClick={() => console.log('Cube clicked!')}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff00ff" wireframe />
      </mesh>
      
      <mesh position={[-5, -2, -3]}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial color="#00ffff" transparent opacity={0.7} />
      </mesh>
      
      <mesh position={[0, 3, -8]}>
        <torusGeometry args={[2, 0.5, 8, 16]} />
        <meshStandardMaterial color="#ffff00" wireframe />
      </mesh>
      
      <Text
        position={[0, 0, -10]}
        fontSize={2}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        PORTFOLIO
      </Text>
    </group>
  );
}
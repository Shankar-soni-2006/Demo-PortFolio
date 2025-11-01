import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import ParticleField from './ParticleField';
import FloatingObjects from './FloatingObjects';

export default function Scene({ mousePosition }) {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ParticleField mousePosition={mousePosition} />
      <FloatingObjects />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
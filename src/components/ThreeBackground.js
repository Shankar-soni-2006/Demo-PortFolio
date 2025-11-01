import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({ darkMode = true }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const shapes = [];
    const colors = darkMode 
      ? [0x00ffff, 0xff00ff, 0xffff00, 0x00ff00]
      : [0x4a90e2, 0x7b68ee, 0x50c878, 0xff6b6b];
    
    for (let i = 0; i < 50; i++) {
      const geometry = Math.random() > 0.5 
        ? new THREE.BoxGeometry(0.2, 0.2, 0.2)
        : new THREE.OctahedronGeometry(0.15);
      
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: darkMode ? 0.6 : 0.3,
        wireframe: true
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.01 + 0.005
      };
      
      shapes.push(shape);
      scene.add(shape);
    }

    // Create DNA helix
    const helixGeometry = new THREE.BufferGeometry();
    const helixPoints = [];
    for (let i = 0; i < 200; i++) {
      const angle = (i / 200) * Math.PI * 8;
      const x = Math.cos(angle) * 5;
      const y = (i / 200) * 40 - 20;
      const z = Math.sin(angle) * 5;
      helixPoints.push(x, y, z);
    }
    helixGeometry.setAttribute('position', new THREE.Float32BufferAttribute(helixPoints, 3));
    
    const helixMaterial = new THREE.PointsMaterial({
      color: darkMode ? 0x00ffff : 0x4a90e2,
      size: 0.1,
      transparent: true,
      opacity: darkMode ? 0.4 : 0.2
    });
    
    const helix = new THREE.Points(helixGeometry, helixMaterial);
    helix.position.x = -30;
    scene.add(helix);

    // Create neural network
    const neurons = [];
    const connections = [];
    
    for (let i = 0; i < 30; i++) {
      const neuronGeometry = new THREE.SphereGeometry(0.3, 8, 8);
      const neuronMaterial = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: darkMode ? 0.8 : 0.4,
        wireframe: true
      });
      
      const neuron = new THREE.Mesh(neuronGeometry, neuronMaterial);
      neuron.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      neurons.push(neuron);
      scene.add(neuron);
    }
    
    // Create connections between neurons
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        if (Math.random() > 0.7) {
          const points = [neurons[i].position, neurons[j].position];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const lineMaterial = new THREE.LineBasicMaterial({
            color: darkMode ? 0x00ffff : 0x4a90e2,
            transparent: true,
            opacity: darkMode ? 0.1 : 0.05
          });
          const line = new THREE.Line(lineGeometry, lineMaterial);
          connections.push({ line, neurons: [neurons[i], neurons[j]] });
          scene.add(line);
        }
      }
    }

    // Create quantum tunnels
    const tunnels = [];
    for (let i = 0; i < 3; i++) {
      const tunnelGeometry = new THREE.TorusGeometry(8, 0.5, 8, 32);
      const tunnelMaterial = new THREE.MeshBasicMaterial({
        color: colors[i],
        transparent: true,
        opacity: darkMode ? 0.3 : 0.15,
        wireframe: true
      });
      
      const tunnel = new THREE.Mesh(tunnelGeometry, tunnelMaterial);
      tunnel.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      );
      tunnel.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      tunnels.push(tunnel);
      scene.add(tunnel);
    }

    // Create data streams
    const streams = [];
    for (let i = 0; i < 8; i++) {
      const streamPoints = [];
      for (let j = 0; j < 50; j++) {
        streamPoints.push(
          Math.sin(j * 0.2) * 10 + (Math.random() - 0.5) * 2,
          j * 2 - 50,
          Math.cos(j * 0.2) * 10 + (Math.random() - 0.5) * 2
        );
      }
      
      const streamGeometry = new THREE.BufferGeometry();
      streamGeometry.setAttribute('position', new THREE.Float32BufferAttribute(streamPoints, 3));
      
      const streamMaterial = new THREE.PointsMaterial({
        color: colors[i % colors.length],
        size: 0.2,
        transparent: true,
        opacity: darkMode ? 0.6 : 0.3
      });
      
      const stream = new THREE.Points(streamGeometry, streamMaterial);
      stream.position.x = (i - 4) * 15;
      streams.push(stream);
      scene.add(stream);
    }

    camera.position.z = 30;
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Animate shapes
      shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        shape.position.y += Math.sin(time + shape.position.x) * shape.userData.floatSpeed;
      });
      
      // Animate helix
      helix.rotation.y += 0.005;
      helix.position.y = Math.sin(time) * 2;
      
      // Animate neural network
      neurons.forEach((neuron, index) => {
        neuron.rotation.x += 0.01;
        neuron.rotation.y += 0.015;
        neuron.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.2);
        neuron.material.opacity = (darkMode ? 0.6 : 0.3) + Math.sin(time * 3 + index) * 0.2;
      });
      
      // Update neural connections
      connections.forEach(connection => {
        const points = [connection.neurons[0].position, connection.neurons[1].position];
        connection.line.geometry.setFromPoints(points);
        connection.line.material.opacity = (darkMode ? 0.05 : 0.02) + Math.sin(time * 4) * 0.05;
      });
      
      // Animate quantum tunnels
      tunnels.forEach((tunnel, index) => {
        tunnel.rotation.x += 0.005 + index * 0.002;
        tunnel.rotation.y += 0.008 + index * 0.001;
        tunnel.rotation.z += 0.003 + index * 0.003;
        tunnel.material.opacity = (darkMode ? 0.2 : 0.1) + Math.sin(time * 2 + index) * 0.1;
      });
      
      // Animate data streams
      streams.forEach((stream, index) => {
        stream.rotation.y += 0.01;
        stream.position.y = Math.sin(time + index) * 5;
        const positions = stream.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += 0.5;
          if (positions[i] > 50) positions[i] = -50;
        }
        stream.geometry.attributes.position.needsUpdate = true;
      });
      
      // Camera movement
      camera.position.x = Math.sin(time * 0.2) * 2;
      camera.position.y = Math.cos(time * 0.15) * 1;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: darkMode ? 0.7 : 0.4
      }}
    />
  );
};

export default ThreeBackground;
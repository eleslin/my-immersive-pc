// App.jsx
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useRef } from 'react'

function PCCase() {
  const meshRef = useRef(0);

  // Animación inicial con GSAP
  useEffect(() => {
    gsap.from(meshRef.current.toFixed, {
      y: Math.PI * 1.5,
      duration: 2,
      ease: 'power3.out',
    });
    gsap.from(meshRef.current.toFixed, {
      z: 5,
      duration: 2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color={'#1e1e1e'} metalness={0.3} roughness={0.6} />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="w-screen h-screen bg-black text-white relative">
      {/* Panel flotante estilo holográfico */}
      <div className="absolute top-10 left-10 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20">
        <h2 className="text-xl font-bold">PC Build Details</h2>
        <p><span className="text-cyan-400">Motherboard:</span> ASUS ROG Strix E Gaming WiFi</p>
        <p><span className="text-cyan-400">Features:</span> Intel Z690, PCIe 5.0, DDR5</p>
        <p><span className="text-cyan-400">Cooling:</span> Custom RGB Fans</p>
      </div>

      {/* Escena 3D */}
      <Canvas shadows camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Stage environment="city" intensity={0.3}>
          <PCCase />
        </Stage>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

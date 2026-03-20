import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, PerspectiveCamera } from '@react-three/drei';
import '../ui/LogowithSpinCat.css';
//import oiaScene from '../../assets/oiiaicat/scene.gltf?url'


function OiiaiModel({ url, velocity, setVelocity }) {
  const meshRef = useRef();
  // Loads the 3D model file
  const { scene } = useGLTF(url);

  // Runs on every frame (approx 60fps)
  useFrame((state, delta) => {
    if (meshRef.current && velocity > 0) {
      // Rotate based on current velocity
      meshRef.current.rotation.y += delta * velocity;
      // Apply friction: slow down the rotation over time
      setVelocity((v) => Math.max(0, v - delta * 5));
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={2.2} 
      position={[0.75, -0.45, 0]} 
      onClick={(e) => {
          e.stopPropagation(); 
          if (e.delta < 2) {
            setVelocity((v) => v + 15);
          }
      }}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    />
  );
}

function Logo() {
  const [velocity, setVelocity] = useState(0);

  return (
    <div className="logo-3d-container">
      <Canvas 
        shadows 
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 5], fov: 30 }}
        // This triggers when you click the empty space around the cat
        onPointerMissed={() => setVelocity(0)}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {/* Pass the velocity and the setter down to the model */}
          <OiiaiModel 
            url="/oiiaicat/scene.gltf"
            velocity={velocity} 
            setVelocity={setVelocity} 
          />
        </Float>
      </Canvas>
    </div>
  );
}

export default Logo;
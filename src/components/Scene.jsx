import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function CodeCore() {
  const group = useRef();
  const inner = useRef();

  useFrame((state, delta) => {
    if (!group.current || !inner.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.18,
      0.035
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.14,
      0.035
    );
    inner.current.rotation.x -= delta * 0.22;
    inner.current.rotation.y += delta * 0.28;
  });

  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={0.32} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.55, 2]} />
          <meshPhysicalMaterial
            color="#0d1517"
            emissive="#06181a"
            roughness={0.22}
            metalness={0.75}
            clearcoat={1}
            clearcoatRoughness={0.18}
          />
        </mesh>

        <mesh scale={1.03}>
          <icosahedronGeometry args={[1.55, 2]} />
          <meshBasicMaterial color="#78f7df" wireframe transparent opacity={0.18} />
        </mesh>

        <group ref={inner}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.05, 0.016, 12, 160]} />
            <meshBasicMaterial color="#b9ff56" transparent opacity={0.72} />
          </mesh>
          <mesh rotation={[0.25, 0.1, Math.PI / 2.8]}>
            <torusGeometry args={[2.35, 0.01, 12, 160]} />
            <meshBasicMaterial color="#78f7df" transparent opacity={0.42} />
          </mesh>
          <mesh rotation={[0.6, 0.2, -0.7]}>
            <torusGeometry args={[1.86, 0.008, 12, 160]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.22} />
          </mesh>
        </group>

        {[[-2.2, 0.7, 0.2], [2.05, -0.75, 0.3], [0.25, 2.2, -0.1], [-0.3, -2.15, 0.2]].map((p, index) => (
          <mesh key={index} position={p}>
            <sphereGeometry args={[index % 2 === 0 ? 0.08 : 0.055, 18, 18]} />
            <meshBasicMaterial color={index % 2 === 0 ? '#b9ff56' : '#78f7df'} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 4, 5]} intensity={2.4} color="#b9ff56" />
      <pointLight position={[-4, -2, 3]} intensity={18} distance={8} color="#33dfd5" />
      <Suspense fallback={null}>
        <CodeCore />
        <Sparkles count={55} scale={[7, 5, 4]} size={1.2} speed={0.15} opacity={0.32} color="#a6fff2" />
      </Suspense>
    </Canvas>
  );
}

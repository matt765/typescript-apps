"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import styles from "./Animation2.module.scss";
import * as THREE from "three";

function DebrisParticle({
  position,
  speed,
  size,
}: {
  position: [number, number, number];
  speed: number;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;

      // Spiral motion around tornado center
      const radius = Math.sqrt(
        position[0] * position[0] + position[2] * position[2]
      );
      const angle = Math.atan2(position[2], position[0]) + time * speed;

      // Vertical movement with some randomness
      const height = position[1] + Math.sin(time * 2 + radius) * 0.5;

      // Tornado spiral tightening as it goes up
      const spiralRadius = radius * (1 - height * 0.1);

      meshRef.current.position.set(
        Math.cos(angle) * spiralRadius,
        height,
        Math.sin(angle) * spiralRadius
      );

      // Rotation for realism
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  );
}

function DustCloud() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const height = Math.random() * 15;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const particlesMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      color: "#D2B48C",
      size: 0.3,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];

        const radius = Math.sqrt(x * x + z * z);
        const angle = Math.atan2(z, x) + time * 0.5;

        // Tornado spiral with decreasing radius as height increases
        const spiralRadius = radius * (1 - y * 0.05);

        positions[i] = Math.cos(angle) * spiralRadius;
        positions[i + 2] = Math.sin(angle) * spiralRadius;

        // Cycle particles that go too high
        if (y > 20) {
          positions[i + 1] = 0;
        } else {
          positions[i + 1] += 0.02;
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <primitive object={particlesGeometry} />
      <primitive object={particlesMaterial} />
    </points>
  );
}

function TornadoCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 2;
    }
  });

  const tornadoGeometry = useMemo(() => {
    const geometry = new THREE.ConeGeometry(6, 15, 16, 16, true);
    // Modify vertices to create tornado shape
    const positions = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      // Create spiral distortion
      const radius = Math.sqrt(x * x + z * z);
      const angle = Math.atan2(z, x);
      const heightFactor = (y + 7.5) / 15; // Normalize height 0-1

      // Tornado spiral effect
      const spiralAngle = angle + heightFactor * Math.PI * 4;
      const spiralRadius = radius * (0.2 + heightFactor * 0.8); // Wider at bottom

      positions[i] = Math.cos(spiralAngle) * spiralRadius;
      positions[i + 2] = Math.sin(spiralAngle) * spiralRadius;
    }

    geometry.attributes.position.needsUpdate = true;
    return geometry;
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 7.5, 0]}>
      <primitive object={tornadoGeometry} />
      <meshStandardMaterial
        color="#696969"
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function GroundDebris() {
  const debrisItems = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 15,
        Math.random() * 2,
        (Math.random() - 0.5) * 15,
      ] as [number, number, number],
      speed: 0.5 + Math.random() * 1.5,
      size: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <>
      {debrisItems.map((debris, i) => (
        <DebrisParticle
          key={i}
          position={debris.position}
          speed={debris.speed}
          size={debris.size}
        />
      ))}
    </>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#8B7D6B" />
    </mesh>
  );
}

function TornadoScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1}
        castShadow
        color="#FFF8DC"
      />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#F4A460" />

      <OrbitControls
        target={[0, 8, 0]}
        enableDamping={true}
        minDistance={10}
        maxDistance={60}
      />

      {/* Tornado components */}
      <Ground />
      <TornadoCore />
      <DustCloud />
      <GroundDebris />
    </>
  );
}

export const Animation2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Tornado Simulation</h2>
        <p>Drag to rotate • Scroll to zoom • Interactive weather system</p>
      </div>

      <div className={styles.canvasContainer}>
        <Canvas
          camera={{ position: [20, 15, 20], fov: 45 }}
          className={styles.canvas}
          style={{
            background: "linear-gradient(to bottom, #87CEEB 0%, #F5DEB3 100%)",
          }}
          shadows
        >
          <TornadoScene />
        </Canvas>
      </div>

      <div className={styles.controls}>
        <div className={styles.controlItem}>
          <span
            className={styles.colorDot}
            style={{ backgroundColor: "#696969" }}
          ></span>
          <span>Tornado Core</span>
        </div>
        <div className={styles.controlItem}>
          <span
            className={styles.colorDot}
            style={{ backgroundColor: "#D2B48C" }}
          ></span>
          <span>Dust Cloud</span>
        </div>
        <div className={styles.controlItem}>
          <span
            className={styles.colorDot}
            style={{ backgroundColor: "#8B4513" }}
          ></span>
          <span>Flying Debris</span>
        </div>
      </div>
    </div>
  );
};

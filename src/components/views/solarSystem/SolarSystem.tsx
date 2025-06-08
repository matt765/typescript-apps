"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Stars, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import styles from "./SolarSystem.module.scss";
import { useSolarSystem, PlanetConfig, COLORS } from "./useSolarSystem";

const JupiterStripesMaterial = shaderMaterial(
  {
    colorStripe: new THREE.Color("#d2b48c"),
    colorSurface: new THREE.Color("#e0cda8"),
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform vec3 colorStripe;
    uniform vec3 colorSurface;
    varying vec2 vUv;

    void main() {
      float y = vUv.y;
      float edgeBlend = 0.01;
      float lowerStripe = smoothstep(0.35 - edgeBlend, 0.35 + edgeBlend, y) - smoothstep(0.45 - edgeBlend, 0.45 + edgeBlend, y);
      float upperStripe = smoothstep(0.55 - edgeBlend, 0.55 + edgeBlend, y) - smoothstep(0.65 - edgeBlend, 0.65 + edgeBlend, y);
      float stripes = lowerStripe + upperStripe;
      vec3 finalColor = mix(colorSurface, colorStripe, stripes);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ JupiterStripesMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    jupiterStripesMaterial: ThreeElements["shaderMaterial"] & {
      colorStripe?: THREE.Color;
      colorSurface?: THREE.Color;
    };
  }
}

type PlanetProps = {
  config: PlanetConfig;
  speedMultiplier: number;
};

export const Sun = () => (
  <mesh>
    <sphereGeometry args={[3.5, 64, 64]} />
    <meshBasicMaterial color={"#FDB813"} />
  </mesh>
);

export const Planet = ({ config, speedMultiplier }: PlanetProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    angleRef.current += delta * config.speed * speedMultiplier;

    groupRef.current.position.x = Math.sin(angleRef.current) * config.distance;
    groupRef.current.position.z = Math.cos(angleRef.current) * config.distance;
    groupRef.current.rotation.y += 0.01 * speedMultiplier;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[config.size, 32, 32]} />
        <meshStandardMaterial color={config.color} roughness={0.7} />
      </mesh>
      {config.hasRings && (
        <mesh rotation-x={Math.PI / 2.3}>
          <ringGeometry args={[config.size + 0.8, config.size + 1.6, 64]} />
          <meshBasicMaterial
            color={"#8A8A8A"}
            side={THREE.DoubleSide}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}
    </group>
  );
};

export const Earth = ({ config, speedMultiplier }: PlanetProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  const moonRef = useRef<THREE.Mesh>(null!);

  const planetAngleRef = useRef(Math.random() * Math.PI * 2);
  const moonAngleRef = useRef(Math.random() * Math.PI * 2);

  const moonConfig = { size: 0.27, distance: 2.2, speed: 2 };

  useFrame((state, delta) => {
    planetAngleRef.current += delta * config.speed * speedMultiplier;
    groupRef.current.position.x =
      Math.sin(planetAngleRef.current) * config.distance;
    groupRef.current.position.z =
      Math.cos(planetAngleRef.current) * config.distance;
    groupRef.current.rotation.y += 0.005 * speedMultiplier;

    if (moonRef.current) {
      moonAngleRef.current += delta * moonConfig.speed * speedMultiplier;
      moonRef.current.position.x =
        Math.sin(moonAngleRef.current) * moonConfig.distance;
      moonRef.current.position.z =
        Math.cos(moonAngleRef.current) * moonConfig.distance;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[config.size, 32, 32]} />
        <meshStandardMaterial color={config.color} roughness={0.7} />
      </mesh>
      <mesh rotation-x={Math.PI / 2} rotation-y={0.2}>
        <ringGeometry
          args={[moonConfig.distance - 0.02, moonConfig.distance + 0.02, 64]}
        />
        <meshBasicMaterial
          color={"#444444"}
          side={THREE.DoubleSide}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh ref={moonRef}>
        <sphereGeometry args={[moonConfig.size, 16, 16]} />
        <meshStandardMaterial color={"#E0E0E0"} />
      </mesh>
    </group>
  );
};

export const Jupiter = ({ config, speedMultiplier }: PlanetProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    angleRef.current += delta * config.speed * speedMultiplier;
    groupRef.current.position.x = Math.sin(angleRef.current) * config.distance;
    groupRef.current.position.z = Math.cos(angleRef.current) * config.distance;
    groupRef.current.rotation.y += 0.01 * speedMultiplier;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[config.size, 64, 64]} />
        <jupiterStripesMaterial key={JupiterStripesMaterial.key} />
      </mesh>
    </group>
  );
};

export const Orbit = ({ distance }: { distance: number }) => (
  <mesh rotation-x={Math.PI / 2}>
    <ringGeometry args={[distance - 0.03, distance + 0.03, 128]} />
    <meshBasicMaterial color={"#444444"} side={THREE.DoubleSide} />
  </mesh>
);

export const AsteroidBelt = ({
  speedMultiplier,
}: {
  speedMultiplier: number;
}) => {
  const { planetData } = useSolarSystem();
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, asteroids] = useMemo(() => {
    const count = 5000;
    const marsOrbit = planetData.find((p) => p.name === "Mars")!.distance;
    const jupiterOrbit = planetData.find((p) => p.name === "Jupiter")!.distance;
    const totalWidth = jupiterOrbit - marsOrbit;
    const gap = totalWidth * 0.2;
    const beltInnerRadius = marsOrbit + gap;
    const beltWidth = totalWidth * 0.6;

    const asteroidData = new Array(count).fill(0).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const radius = beltInnerRadius + Math.random() * beltWidth;
      const y = (Math.random() - 0.5) * 1.5;
      const speed = 0.01 + Math.random() * 0.03;
      return { angle, radius, y, speed };
    });

    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      posArray[i * 3] =
        Math.cos(asteroidData[i].angle) * asteroidData[i].radius;
      posArray[i * 3 + 1] = asteroidData[i].y;
      posArray[i * 3 + 2] =
        Math.sin(asteroidData[i].angle) * asteroidData[i].radius;
    }
    return [posArray, asteroidData];
  }, [planetData]);

  useFrame(() => {
    const positionAttribute = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    for (let i = 0; i < asteroids.length; i++) {
      asteroids[i].angle += asteroids[i].speed * 0.02 * speedMultiplier;

      const x = Math.cos(asteroids[i].angle) * asteroids[i].radius;
      const z = Math.sin(asteroids[i].angle) * asteroids[i].radius;

      positionAttribute.setX(i, x);
      positionAttribute.setZ(i, z);
    }
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={COLORS.asteroid}
        sizeAttenuation={false}
        transparent={true}
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
};

export const SolarSystem = () => {
  const { sliderValue, setSliderValue, speedMultiplier, planetData } =
    useSolarSystem();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.animationContainer}>
        <Canvas
          gl={{ alpha: true }}
          camera={{ position: [0, 50, 90], fov: 45, far: 5000 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight
            position={[0, 0, 0]}
            intensity={5}
            decay={0}
            color="white"
          />
          <Stars
            radius={400}
            depth={50}
            count={15000}
            factor={10}
            saturation={0}
            fade
            speed={1}
          />
          <Sun />
          <AsteroidBelt speedMultiplier={speedMultiplier} />

          {planetData.map((planet) => (
            <React.Fragment key={planet.name}>
              {planet.name === "Jupiter" ? (
                <Jupiter config={planet} speedMultiplier={speedMultiplier} />
              ) : planet.name === "Earth" ? (
                <Earth config={planet} speedMultiplier={speedMultiplier} />
              ) : (
                <Planet config={planet} speedMultiplier={speedMultiplier} />
              )}
              <Orbit distance={planet.distance} />
            </React.Fragment>
          ))}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            minDistance={10}
            maxDistance={200}
          />
        </Canvas>
      </div>
      <div className={styles.controls}>
        <label htmlFor="speed">Orbital Speed</label>
        <input
          type="range"
          id="speed"
          name="speed"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

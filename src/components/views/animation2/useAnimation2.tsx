import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const useAnimation = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;

      // Gentle swaying motion for the entire tornado
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      groupRef.current.position.x = Math.sin(time * 0.2) * 2;
      groupRef.current.position.z = Math.cos(time * 0.15) * 1.5;
    }
  });

  return groupRef;
};

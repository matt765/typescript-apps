import { useState } from "react";

export const COLORS = {
  sun: "#FDB813",
  orbit: "#444444",
  mercury: "#a9a9a9",
  venus: "#e6e6e6",
  earth: "#6b93d6",
  moon: "#E0E0E0",
  mars: "#ff4500",
  saturn: "#f0e68c",
  saturnRings: "#8A8A8A",
  uranus: "#add8e6",
  neptune: "#4682b4",
  jupiterSurface: "#e0cda8",
  jupiterStripe: "#d2b48c",
  asteroid: "rgb(99,99,99,0.01)",
};

export type PlanetConfig = {
  name: string;
  size: number;
  distance: number;
  speed: number;
  color?: string;
  hasRings?: boolean;
};

export const planetData: PlanetConfig[] = [
  {
    name: "Mercury",
    color: COLORS.mercury,
    size: 0.38,
    distance: 6,
    speed: 0.9,
  },
  { name: "Venus", color: COLORS.venus, size: 0.95, distance: 9, speed: 0.6 },
  { name: "Earth", color: COLORS.earth, size: 1, distance: 13, speed: 0.4 },
  { name: "Mars", color: COLORS.mars, size: 0.53, distance: 18, speed: 0.3 },
  { name: "Jupiter", size: 2.2, distance: 30, speed: 0.15 },
  {
    name: "Saturn",
    color: COLORS.saturn,
    size: 1.8,
    distance: 42,
    speed: 0.1,
    hasRings: true,
  },
  {
    name: "Uranus",
    color: COLORS.uranus,
    size: 1.3,
    distance: 53,
    speed: 0.07,
  },
  {
    name: "Neptune",
    color: COLORS.neptune,
    size: 1.2,
    distance: 62,
    speed: 0.05,
  },
];

export const useSolarSystem = () => {
  const [sliderValue, setSliderValue] = useState(30);
  const speedMultiplier = (sliderValue / 30) ** 3;

  return {
    sliderValue,
    setSliderValue,
    speedMultiplier,
    planetData,
    COLORS,
  };
};

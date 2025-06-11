"use client";
import React, { useRef, useState } from "react";
import styles from "./WreckingBall.module.scss";
import { RefreshIcon } from "../../../assets/icons/RefreshIcon";
import { useWreckingBall } from "./useWreckingBall";

const MatterScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  useWreckingBall(sceneRef);
  return <div ref={sceneRef} className={styles.sceneContainer} />;
};

export const WreckingBall = () => {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleReset} className={styles.resetButton}>
        <RefreshIcon fill="white" />
      </button>
      <MatterScene key={resetKey} />
    </div>
  );
};

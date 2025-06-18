"use client";
import React, { useRef, useState } from "react";
import styles from "./Slingshot.module.scss";
import { RefreshIcon } from "../../../assets/icons/RefreshIcon";
import { useSlingshot } from "./useSlingshot";

const MatterScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  useSlingshot(sceneRef);
  return <div ref={sceneRef} className={styles.sceneContainer} />;
};

export const Slingshot = () => {
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

"use client";
import React, { useRef, useState } from "react";
import styles from "./Spinner.module.scss";
import { RefreshIcon } from "../../../assets/icons/RefreshIcon";
import { useSpinner } from "./useSpinner";

const MatterScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const {
    isSpinning,
    startSpinning,
    stopSpinning,
    isLeftBlowing,
    startLeftBlowing,
    stopLeftBlowing,
    isRightBlowing,
    startRightBlowing,
    stopRightBlowing,
    isValveActive,
    startValve,
    stopValve,
  } = useSpinner(sceneRef);

  return (
    <div ref={sceneRef} className={styles.sceneContainer}>
      {/* Spinner Button */}
      <button
        className={`${styles.spinButton} ${isSpinning ? styles.spinning : ""}`}
        onMouseDown={startSpinning}
        onMouseUp={stopSpinning}
        onMouseLeave={stopSpinning}
        onTouchStart={startSpinning}
        onTouchEnd={stopSpinning}
      >
        <div className={styles.spinnerIcon}>⚡</div>
      </button>

      {/* Ball Valve Button */}
      <button
        className={`${styles.valveButton} ${
          isValveActive ? styles.active : ""
        }`}
        onMouseDown={startValve}
        onMouseUp={stopValve}
        onMouseLeave={stopValve}
        onTouchStart={startValve}
        onTouchEnd={stopValve}
      >
        <div className={styles.valveIcon}>💧</div>
      </button>

      {/* Left Blower Button */}
      <button
        className={`${styles.leftBlowerButton} ${
          isLeftBlowing ? styles.active : ""
        }`}
        onMouseDown={startLeftBlowing}
        onMouseUp={stopLeftBlowing}
        onMouseLeave={stopLeftBlowing}
        onTouchStart={startLeftBlowing}
        onTouchEnd={stopLeftBlowing}
      >
        <div className={styles.blowerIcon}>💨</div>
      </button>

      {/* Right Blower Button */}
      <button
        className={`${styles.rightBlowerButton} ${
          isRightBlowing ? styles.active : ""
        }`}
        onMouseDown={startRightBlowing}
        onMouseUp={stopRightBlowing}
        onMouseLeave={stopRightBlowing}
        onTouchStart={startRightBlowing}
        onTouchEnd={stopRightBlowing}
      >
        <div className={`${styles.blowerIcon} ${styles.flipped}`}>💨</div>
      </button>
    </div>
  );
};

export const Spinner = () => {
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

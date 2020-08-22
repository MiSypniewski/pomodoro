import React from "react";

const ProgressBar = ({ isPaused = false, isFinish = false, percent = 33 }) => {
  return (
    <div
      className={`ProgressBar ${isPaused ? " ProgressBar--inactive" : ""} ${isFinish ? " ProgressBar--finish" : ""}`}
    >
      <div
        className={`ProgressBar__procent ${isFinish ? "ProgressBar__procent--finish" : ""}`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

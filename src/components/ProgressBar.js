import React from "react";

const ProgressBar = ({ isPaused = false, percent = 33 }) => {
  return (
    <div className={`ProgressBar ${isPaused ? " ProgressBar--inactive" : ""}`}>
      <div style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;

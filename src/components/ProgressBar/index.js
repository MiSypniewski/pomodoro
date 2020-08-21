import React from "react";

const ProgressBar = ({ className = "", percent = 33 }) => {
  return (
    <div className={"ProgressBar " + className}>
      <div style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;

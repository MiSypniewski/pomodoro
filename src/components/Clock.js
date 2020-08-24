import React from "react";
import { isNumber } from "../lib/CheckFunctions";

const Clock = ({ isPaused = false, isFinish = false, minutes = 20, seconds = 48 }) => {
  return (
    <h2 className={`Clock ${isPaused ? " Clock--inactive" : ""} ${isFinish ? " Clock--finish" : ""}`}>
      Pozostało {isNumber(minutes)}:{isNumber(seconds)}
    </h2>
  );
};

export default Clock;

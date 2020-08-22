import React from "react";

const isNumber = (number) => {
  if (Number.isInteger(parseInt(number))) {
    return number < 10 ? `0${number}` : `${number}`;
  } else {
    alert(`Podana wartość: ${number} nie jest liczbą!`);
    return 99;
  }
};

const Clock = ({ isPaused = false, minutes = 20, seconds = 48 }) => {
  return (
    <h2 className={`Clock ${isPaused ? " Clock--inactive" : ""}`}>
      Pozostało {isNumber(minutes)}:{isNumber(seconds)}
    </h2>
  );
};

export default Clock;

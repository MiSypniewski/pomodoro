const isNumber = (number) => {
  if (Number.isInteger(parseInt(number))) {
    if (number < 10) return `0${number}`;
    else if (number >= 10 && number <= 24) return `${number}`;
    else return `99`;
  } else {
    // alert(`Podana wartość: ${number} nie jest liczbą!`);
    return `99`;
  }
};

const getMinutesAndSecondsFromDurationInSeconds = (durationInSeconds) => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return [minutes, seconds];
};

export { isNumber, getMinutesAndSecondsFromDurationInSeconds };

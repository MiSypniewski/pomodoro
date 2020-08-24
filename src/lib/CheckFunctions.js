const isNumber = (number) => {
  if (Number.isInteger(parseInt(number))) {
    return number < 10 ? `0${number}` : `${number}`;
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

import React from "react";

const isNumber = (number) => {
  if (Number.isInteger(parseInt(number))) {
    return number < 10 ? `0${number}` : `${number}`;
  } else {
    alert(`Podana wartość: ${number} nie jest liczbą!`);
    return 99;
  }
};

const Clock = ({ className = "", minutes = 20, seconds = 48 }) => {
  return (
    <h2 className={"Clock " + className}>
      Pozostało {isNumber(minutes)}:{isNumber(seconds)}
    </h2>
  );
};

const ProgressBar = ({ className = "", percent = 33 }) => {
  return (
    <div className={"ProgressBar " + className}>
      <div style={{ width: `${percent}%` }}></div>
    </div>
  );
};

class Timebox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      elapsetTimeInSeconds: 0,
    };
  }

  startTimer = () => {
    this.intervalId = window.setInterval(() => {
      this.setState((prevState) => ({ elapsetTimeInSeconds: prevState.elapsetTimeInSeconds + 0.1 }));
    }, 100);
  };

  stopTimer = () => {
    window.clearInterval(this.intervalId);
  };

  handleStart = (event) => {
    this.setState({
      isRunning: true,
      elapsetTimeInSeconds: 0,
    });
    this.startTimer();
  };

  handleStop = (event) => {
    this.setState({
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      elapsetTimeInSeconds: 0,
    });
    this.stopTimer();
  };

  togglePause = () => {
    this.setState((prevState) => {
      const isPaused = !prevState.isPaused;
      if (isPaused) this.stopTimer();
      else this.startTimer();
      return {
        isPaused,
        pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount,
      };
    });
  };

  render() {
    const { isPaused, isRunning, pausesCount, elapsetTimeInSeconds } = this.state;
    const { title, totalTimeInMinutes } = this.props;
    const totalTimeInSeconds = totalTimeInMinutes * 60;
    const timeLeftInSeconds = totalTimeInSeconds - elapsetTimeInSeconds;
    const minutesLeft = Math.floor(timeLeftInSeconds / 60);
    const secondsLeft = Math.floor(timeLeftInSeconds % 60);
    const progressInPercent = (elapsetTimeInSeconds / totalTimeInSeconds) * 100;
    return (
      <div className="Timebox">
        <h1>{title}</h1>
        <Clock className={isPaused ? "inactive" : ""} minutes={minutesLeft} seconds={secondsLeft} />
        <ProgressBar className={isPaused ? "inactive" : ""} percent={progressInPercent} />
        <button onClick={this.handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={this.handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={this.togglePause} disabled={!isRunning}>
          {isPaused ? "Wznów" : "Pauzuj"}
        </button>
        Liczba przerw: {pausesCount}
      </div>
    );
  }
}

export default Timebox;

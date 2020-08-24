import React from "react";
import ProgressBar from "./ProgressBar";
import Clock from "./Clock";
import { getMinutesAndSecondsFromDurationInSeconds } from "../lib/CheckFunctions";

class Timebox extends React.Component {
  state = {
    isRunning: false,
    isPaused: false,
    isFinish: false,
    pausesCount: 0,
    elapsedTimeInSeconds: 0,
  };
  intervalId = null;

  startTimer = () => {
    if (this.intervalId === null) {
      this.intervalId = window.setInterval(() => {
        this.setState((prevState) => ({ elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.1 }));
      }, 100);
    }
  };

  stopTimer = () => {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  };

  handleStart = () => {
    this.setState({
      isRunning: true,
    });
    this.startTimer();
  };

  handleStop = () => {
    this.setState({
      isRunning: false,
      isPaused: false,
      isFinish: false,
      pausesCount: 0,
      elapsedTimeInSeconds: 0,
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
    const { isPaused, isRunning, isFinish, pausesCount, elapsedTimeInSeconds } = this.state;
    const { title, totalTimeInMinutes, handleRemoveTask, id } = this.props;
    const totalTimeInSeconds = totalTimeInMinutes * 60;
    const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
    const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100;
    const [minutesLeft, secondsLeft] = getMinutesAndSecondsFromDurationInSeconds(timeLeftInSeconds);

    if (timeLeftInSeconds <= 0 && !isFinish) {
      this.setState(() => {
        this.stopTimer();
        return {
          isFinish: true,
          elapsedTimeInSeconds: totalTimeInSeconds,
        };
      });
    }
    return (
      <div className="timebox">
        <h1 className={`timebox__title ${isPaused ? " timebox__title--inactive" : ""}`}>{title}</h1>
        <Clock isPaused={isPaused} isFinish={isFinish} minutes={minutesLeft} seconds={secondsLeft} />
        <ProgressBar isPaused={isPaused} isFinish={isFinish} percent={progressInPercent} />
        <button onClick={this.handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={this.handleStop} disabled={!isRunning}>
          {isFinish ? "Wyzeruj" : "Stop"}
        </button>
        <button onClick={this.togglePause} disabled={!isRunning}>
          {isPaused ? "Wznów" : "Pauzuj"}
        </button>
        Liczba przerw: {pausesCount}
        <button onClick={() => handleRemoveTask(id)}>Usuń</button>
      </div>
    );
  }
}

export default Timebox;

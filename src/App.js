import React from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import TimeboxEditor from "./components/TimeboxEditor";
import Timebox from "./components/Timebox";

class App extends React.Component {
  state = {
    title: "Ucze się wyciągać stan w góre :)",
    totalTimeInMinutes: 3,
    tasks: [
      {
        id: uuid(),
        title: `ciężka nauka`,
        totalTimeInMinutes: 30,
      },
    ],
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddTask = (event) => {
    event.preventDefault();
    const { title, totalTimeInMinutes } = this.state;

    const task = {
      id: uuid(),
      title: title,
      totalTimeInMinutes: totalTimeInMinutes,
    };
    this.setState((prevState) => {
      const tasks = [task, ...prevState.tasks];
      return { tasks };
    });
  };

  handleRemoveTask = (id) => {
    // event.preventDefault();
    this.setState((prevState) => {
      const tasks = prevState.tasks.filter((task) => task.id !== id);
      return { tasks };
    });
  };

  render() {
    const { title, totalTimeInMinutes, tasks } = this.state;
    return (
      <>
        <TimeboxEditor
          title={title}
          totalTimeInMinutes={totalTimeInMinutes}
          onChangeInput={this.handleInputChange}
          onClickAddTask={this.handleAddTask}
        />
        {tasks.map((task) => (
          <Timebox
            key={task.id}
            id={task.id}
            title={task.title}
            handleRemoveTask={this.handleRemoveTask}
            totalTimeInMinutes={task.totalTimeInMinutes}
          />
        ))}
      </>
    );
  }
}

export default App;

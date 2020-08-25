import React from "react";
import { v4 as uuid } from "uuid";
import TimeboxEditor from "./TimeboxEditor";
import Timebox from "./Timebox";

class App extends React.Component {
  state = {
    tasks: [
      {
        id: uuid(),
        title: `ciężka nauka`,
        totalTimeInMinutes: 30,
      },
    ],
  };

  handleAddTask = (event, _task) => {
    event.preventDefault();
    this.setState((prevState) => {
      const tasks = [_task, ...prevState.tasks];
      return { tasks };
    });
  };

  handleRemoveTask = (id) => {
    this.setState((prevState) => {
      const tasks = prevState.tasks.filter((task) => task.id !== id);
      return { tasks };
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <>
        <TimeboxEditor onClickAddTask={this.handleAddTask} />
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

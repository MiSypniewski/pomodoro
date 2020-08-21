import React from "react";
import { v4 as uuid } from "uuid";
import TimeboxEditor from "../TimeboxEditor";
import Timebox from "../Timebox";

class EditableTimebox extends React.Component {
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
          <Timebox key={task.id} title={task.title} totalTimeInMinutes={task.totalTimeInMinutes} />
        ))}
      </>
    );
  }
}

export default EditableTimebox;

import React from "react";
import { v4 as uuid } from "uuid";

class TimeboxEditor extends React.Component {
  state = {
    title: "Test",
    totalTimeInMinutes: 3,
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { title, totalTimeInMinutes } = this.state;
    const { onClickAddTask } = this.props;
    return (
      <div className="TimeboxEditor">
        <label>
          Co robisz? <input name="title" value={title} onChange={this.handleInputChange} type="text" />
        </label>
        <br />
        <label>
          Ile minut?
          <input name="totalTimeInMinutes" value={totalTimeInMinutes} onChange={this.handleInputChange} type="number" />
        </label>
        <br />
        <button
          onClick={(event) => {
            onClickAddTask(event, { id: uuid(), title, totalTimeInMinutes });
          }}
        >
          Dodaj
        </button>
      </div>
    );
  }
}
export default TimeboxEditor;

import React from "react";
import "./TimeboxEditor.scss";

const TimeboxEditor = ({ onChangeInput, onClickAddTask, title, totalTimeInMinutes }) => {
  return (
    <div className="TimeboxEditor">
      <label>
        Co robisz? <input name="title" value={title} onChange={onChangeInput} type="text" />
      </label>
      <br />
      <label>
        Ile minut? <input name="totalTimeInMinutes" value={totalTimeInMinutes} onChange={onChangeInput} type="number" />
      </label>
      <br />
      <button onClick={onClickAddTask}>Dodaj</button>
    </div>
  );
};

export default TimeboxEditor;

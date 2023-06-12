import React, { useState } from "react";

const Form = ({ addFun }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  //   addFun;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a Task");
      return;
    }
    addFun({text ,day , reminder })
    setDay('')
    setText('')
    setReminder(false)
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="text"
          placeholder="Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default Form;

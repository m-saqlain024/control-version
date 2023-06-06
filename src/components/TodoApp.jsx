import React, { useState } from "react";

function FormGoal(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    // console.log('ok')
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }
  return (
    <div>
      <h1>My Goal</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Goal"
          placeholder="enter a goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="enter by"
          value={formData.by}
          onChange={changeHandler}
        />
        <button>submit goal</button>
      </form>
    </div>
  );
}

function Listofgoals(props) {
  return (
    <ul>
      {props.allgoals.map((g) => (
        <li key={g.goal}>
          <span>
            {" "}
            My Goal is to {g.goal} by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function TodoApp() {
  const [allgoals, updateAllGoals] = useState([]);
  function addGaol(goal) {
    updateAllGoals([...allgoals, goal]);
  }
  return (
    <div>
      <FormGoal onAdd={addGaol} />
      <Listofgoals allgoals={allgoals} />
    </div>
  );
}

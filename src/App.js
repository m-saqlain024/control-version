import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointments",
      day: "FEB 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "FEB 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shooping",
      day: "FEB 7th at 12:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Meeting with Girlfriend",
      day: "FEB 14th at 10:30pm",
      reminder: true,
    },
  ]);
  //  Add function
  const addFun = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000);
    console.log(id);
    const Addtask = { id, ...task };
    setTasks([...tasks, Addtask]);
  };
  // for Delete
  const onDelete = (id) => {
    console.log("ok murshid", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // for reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };
  const handleAdd = () => {
    // console.log('ok')
    setShowForm(!showForm);
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={handleAdd} showForm={showForm} />
      {showForm && <Form addFun={addFun} />}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onClick={onDelete} reminder={toggleReminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
}

export default App;

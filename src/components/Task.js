import Lists from "./Lists"
const Task = ({ tasks, onClick , reminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Lists
          key={task.id}
          tasks={task}
          onClick={onClick}
          reminder={reminder}
        />
      ))}
    </>
  );
};

export default Task

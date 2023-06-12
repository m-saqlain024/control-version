import React from "react";
import { FaTimes } from "react-icons/fa";
const Lists = ({ tasks, onClick, reminder }) => {
  return (
    <div className={`task  ${tasks.reminder ? "reminder" : ""}`} onDoubleClick={()=>reminder(tasks.id)}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>
          {tasks.text}{" "}
          <FaTimes
            onClick={() => {
              onClick(tasks.id);
            }}
            style={{ color: "red", cursor: "pointer" }}
          />
        </h1>
      </div>

      <p>{tasks.day}</p>
    </div>
  );
};

export default Lists;

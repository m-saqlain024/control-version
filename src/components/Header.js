import React from "react";
import "./Header.css";
import Button from "./Button";

const Header = ({ onAdd, title, showForm }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "green" : 'red'}
        label={showForm ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};


export default Header;

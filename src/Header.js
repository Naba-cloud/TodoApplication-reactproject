import React from "react";
import AddTodo from "./AddTodo";
const Header = () => {
  return (
    <>
      <div style={{ color: "white" }} className=" m-3">
        <i className="fa fa-file"></i>
        <h1 className=" text-center">Todo List Application</h1>
        <small>Add your routine to start your day</small>
        <br />
        <br />
      </div>
      <AddTodo />
    </>
  );
};
export default Header;

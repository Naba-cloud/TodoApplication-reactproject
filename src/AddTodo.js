import React from "react";
import Display from "./Display";
import swal from "sweetalert";
const AddTodo = () => {
  const [list, setList] = React.useState([
    {
      todo: "Sample Data"
    }
  ]);
  const [todo, addTodo] = React.useState();

  const data = {
    todo
  };

  const getdata = () => {
    if (todo) {
      setList([...list, data]);
      addTodo("");
    } else {
      swal("Input Field Cannot be Empty");
    }
  };
  const delval = (key) => {
    let ar1 = [...list];
    ar1.splice(key, 1);
    setList(ar1);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <input
            style={{ boxShadow: "none", outline: "none" }}
            onChange={(e) => {
              addTodo(e.target.value);
            }}
            type="text"
            value={todo}
          />
          <button
            style={{ border: "none", boxShadow: "none" }}
            className="btn btn-warning m-3 "
            onClick={getdata}
          >
            Add Todo
          </button>
        </div>
      </div>
      <Display list={list} data={delval} />
    </div>
  );
};
export default AddTodo;

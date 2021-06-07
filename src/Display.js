import React from "react";
import list from "./AddTodo";

const Display = (props) => {
  const { list, data } = props;

  return list.map((item, key) => {
    return (
      <div className="container-fluid" key={key}>
        <div className="row w-50 m-3 bg-white mx-auto">
          <div className="col-lg-7">
            <h5 style={{ color: "#1488CC" }} className=" mx-auto">
              <br /> {item.todo}
            </h5>
          </div>
          <div class="col-lg-5">
            <button
              style={{ border: "none", boxShadow: "none" }}
              className="btn btn-danger m-3"
              value={key}
              onClick={() => {
                data(key);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });
};
export default Display;

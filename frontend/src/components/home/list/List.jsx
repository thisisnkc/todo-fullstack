import React from "react";
import "./list.css";
import { RiDeleteBin5Line } from "react-icons/ri";

function List({ value, handleDelete, id}) {

  return (
    <div className="list">
      <div className="value">{value}</div>
      <RiDeleteBin5Line
        style={{ color: "orange" }}
        className="icon"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}

export default List;

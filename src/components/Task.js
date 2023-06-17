import React from "react";


function Task(prop) {

  function handleDelete(){
    prop.onDelete(prop.text);
  }

  return (
    <div className="task">
      <div className="label">{prop.category}</div>
      <div className="text">{prop.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

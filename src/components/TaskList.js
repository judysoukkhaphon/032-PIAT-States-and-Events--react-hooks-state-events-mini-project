//import React, {useState} from "react";
import React from "react";
import Task from "./Task";
//import { v4 as uuid } from "uuid";

function TaskList(props) {

  //const [itemsToDisplay, setItemsToDisplay] = useState(props.tasks);

  //console.log("selected filters: " + props.filters);
  
  
  /*
  props.filters.map((task)=>{
    return task.id=uuid();
  })
  */
  
  

  const displayTasks = props.visibleTasks.map((task)=> (
    <Task 
    key={task.text} 
    category={task.category} 
    text={task.text} 
    onDelete={props.setTasks} 
    //id={task.id}
    />
  ));

// "key" props don't get passed, they are used by React as a reference. To access them, you'll have to pass it again under another prop name
  return (
    <div className="tasks">{displayTasks}</div>
  );
}

export default TaskList;

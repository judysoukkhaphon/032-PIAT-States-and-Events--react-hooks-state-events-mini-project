import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
//import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {


  //------ TaskList/Task Management---------
  const [taskList, setTaskList] = useState([...TASKS]);

  // manages the removals from taskList 
  function handleDelete(removedTask){
    const updatedList = taskList.filter((task)=>{
      if(task.id!==removedTask.id){return true}
      else{
        return false;
      };
    })
    setTaskList(updatedList);
  }

  // manages the addition of tasks to taskList
  function onTaskFormSubmit(newTask) {
    console.log(newTask);
    setTaskList([...taskList, newTask]);
  }
  // --------------------------------------

  // Category Filter management-----------

  // pass function with setCategory to CategoryFilter, 
    // which when called there will pass back category selection to pass to TaskList
  const [filters, setFilters] = useState([]);

  // the array needs to be empty at the start everytime there is a change so I don't have to handle deselections
  function handleFilter(filterOptions) {
    //setFilters(filterOptions);
    console.log(filterOptions);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} setTasks={handleDelete} filters={filters}/>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
//import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTaskList] = useState(TASKS);
  const [category, setCategory] = useState("All");

  // manages the removals from taskList 
  function handleDelete(removedTask){
    //const updatedList = 
    setTaskList(taskList.filter((task)=>task.text!==removedTask))
    //setTaskList(updatedList);
  }

  // manages the addition of tasks to taskList
  function onTaskFormSubmit(newTask) {
    console.log(newTask);
    setTaskList([...taskList, newTask]);
  }



  const filteredTasks = taskList.filter((task)=> category === "All" || task.category=== category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} handleFilter={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((cat)=> cat !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList setTasks={handleDelete} visibleTasks={filteredTasks}/>
    </div>
  );
}

export default App;

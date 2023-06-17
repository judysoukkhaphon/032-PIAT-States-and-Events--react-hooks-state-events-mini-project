import React, {useState} from "react";

function NewTaskForm(props) {

  const [category, setCategory] = useState("Code");
  const [text, setTaskText] = useState("");

  function handleCategoryChange(event) {
    event.preventDefault();
    setCategory(event.target.value);
  }
  
  function handleTextChange(event) {
    event.preventDefault();
    setTaskText(event.target.value);
  }

  function submitNewTask(event) {
    event.preventDefault();
    const newTask = {
      text,
      category
    }
    props.onTaskFormSubmit(newTask)
  }


  return (
    <form 
      className="new-task-form" 
      onSubmit={submitNewTask}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {props.categories.map((category)=>(
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

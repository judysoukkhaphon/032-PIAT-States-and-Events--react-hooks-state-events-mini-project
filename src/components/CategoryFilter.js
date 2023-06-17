import React from "react"; //added {useState}
//import { v4 as uuid } from "uuid";

function CategoryFilter(props) {

  


  
  const taskList=props.categories.map((category)=> {
    const className = category === props.selectedCategory ? "selected" : null;
    return (
      // onClick={props.handleFilter(category)} causes a bad setState() error for some reason. Had to add ()=> to fix.
      <button 
        key={category} 
        onClick={()=>props.handleFilter(category)} 
        className={className}>
          {category}
      </button>
    );
  });
   
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {taskList}
    </div>
  );
}

export default CategoryFilter;

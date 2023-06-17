import React, {useState} from "react"; //added {useState}
//import { v4 as uuid } from "uuid";

function CategoryFilter(props) {

  /* What should be in state?/ How to get selection from state?
      *Note: Task makes changes to taskList, but there's no varying state of clicking X, so Task.js has no state
      //return this to App through prop-function
      categoryArray=[];
      props.function(categoryArray);

      onChange={function() => 
        if <button> has className="selected"
            then, categoryArray.push(event.target.innerText)}

      Keep in mind: categories can be selected and unselected, 
            so how to account for adding it to array then removing it?
  */

  // App should manage the state of the list of tasks that it passes down.
  // CategoryFilter should manage the state of the data it passes back.
 

  //-------------------------------------------------------------
  const [isSelected, setIsSelected] = useState(false)
  const [filterArray, setFilterArray] = useState([""]);

  function handleClick(event){
    setIsSelected((isSelected)=> !isSelected);
    isSelected ? event.target.setAttribute("class", "selected"): event.target.removeAttribute("class");

    /*
      // ways to reference the <button> element 
    isSelected ? console.log("selected") : console.log("not selected");

    console.log("class=" + event.target.className + " category: " + event.target.innerText);

    if(event.target.className){
      props.handleFilter(event.target.innerText); 
    } else {
      console.log("does not exist");
    }
    */
    // trying to reference all the elements and their states at once:
    // if "All" is selected, need to make sure that means that all categories will be passed, 
    //    but not to change the "selected" states of the elements to "selected".

    /*
    setFilterArray((filterArray) => {
      const arr = taskList.map((buttonElement)=>{
      if(buttonElement.className==="selected"){
        return buttonElement.category;
      } else {return null;}
      })
      return arr});
      */

      //setFilterArray((currentState)=>taskList);

      /*
      setFilterArray((filterArray) => {
        const arr = taskList.map((obj)=>{
        if(obj.class){
          return true;
        } else {return null;}
        })
        return arr});
        */
        
        // Not able to reference element select state to pass in array
        const arr = taskList.map((obj)=>{
          if(obj){
            console.log(obj);
          } else {console.log("no");}
          })

          // TRY THIS:
          // maybe try to make the whole <button> element have state? 
            //where onClick changes the state and adds a className attribute


    props.handleFilter(filterArray);
  }

      // have to find a way to read all <button> elements' "selected" state and pass them all at once, 
    // so the filters don't stack on top of eachother, filtering the already filtered lists. 
    // this component renders each category one-by-one, 
    //try rewriting the category mapping function outside of the return statement, 
      // so I have a tangible reference to the aggregate list
  const taskList=props.categories.map((category)=>(
    <button key={category} onClick={handleClick}>{category}</button>
   ));
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/*
      {props.categories.map((category)=>(
     <button key={category} onClick={handleClick}>{category}</button>
    ))}
      */}
      {taskList}
    </div>
  );
}

export default CategoryFilter;

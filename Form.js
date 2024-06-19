import React,{useState} from 'react'
import {v4 as uuidv4} from "uuid";
const Form = ({input, setInput, todos, setTodos}) => {
  function onFormSubmit(event){
    event.preventDefault();
    setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
    setInput("");
    console.log(input);
  }
  function onInputChange(event){
    setInput(event.target.value);

  }
  return (
 <div>
  <form onSubmit ={onFormSubmit}>
    <input type="text" placeholder='enter a todo' className='task-input' value={input} onChange={onInputChange} />
    <button  className='button-add '>+</button>
  </form>
 </div>
  
  )
}

export default Form
import './App.css'
import './todo_template.css'
import { useEffect, useState } from 'react';
import { fetchTodos, addTodo, deleteTodo } from './services/api';

function App() {
  
  return (
    <>
    <div id="full_screen">
      <h1>welcome to my to do list app✨</h1>
      <div id="text_input">
        <textarea placeholder="Add a new task"></textarea>
        <button>Add</button>
      </div>

      <div id="todos">
        {/* this is gonna be the template for a to-do */}
        <div id="entire_to-do_box">
          <div id="text_part_of_to-do">
            <div id="to-do_title">
              <h2>sample to-do</h2>
            </div>
            <div id="to-do_description">
              <h3>sample to-do description</h3>
            </div>
          </div>
          <input type="checkbox" id="task_completed"></input>
          <button id="delete_to-do" >🗑️</button>
        </div>
      {/* up until here */}
      {/* this is gonna be the template for a to-do */}
        <div id="entire_to-do_box">
          <div id="text_part_of_to-do">
            <div id="to-do_title">
              <h2>sample to-do</h2>
            </div>
            <div id="to-do_description">
              <h3>sample to-do description</h3>
            </div>
          </div>
          <input type="checkbox" id="task_completed"></input>
          <button id="delete_to-do" >🗑️</button>
        </div>
      {/* up until here */}
      </div>

    </div>
    </>
  )
}

export default App

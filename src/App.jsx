// import React from 'react';
//components
import React, { useState } from 'react';
import {currentTodoes} from"./CurrentTodoes.js";
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import ToDoList from "./ToDoList";
 
function App(){
    const [toDoList, setToDoList] = useState(currentTodoes);
    return <div>
        <Header/>
        <CreateTodo/>
        <ToDoList toDoList={toDoList}/>
    </div>
}
 

export default App;
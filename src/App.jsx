// import React from 'react';
//components
import React, { useState } from 'react';
import {currentTodoes} from"./CurrentTodoes.js";
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import ToDoList from "./ToDoList";
 
function App(){
    const [toDoList, setToDoList] = useState(currentTodoes);
    console.log(toDoList);
    return <div>
        <Header/>
        <CreateTodo setToDoList={setToDoList} />
        <ToDoList toDoList={toDoList}/>
    </div>
}
 

export default App;
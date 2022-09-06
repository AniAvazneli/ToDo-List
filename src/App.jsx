// import React from 'react';
//components
import React, { useState } from 'react';
import {currentTodoes} from"./CurrentTodoes.js";
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import ToDoList from "./ToDoList";
import Footer from './Footer.jsx';
 
function App(){
    const [toDoList, setToDoList] = useState(currentTodoes);
    const reNewStuatus = (id, status) =>{
        const toDo = toDoList.find((element) => element.id===id);
        toDo.complete=status;
    }
    return <div className='card'>
        <Header/>
        <CreateTodo setToDoList={setToDoList} />
        <ToDoList reNewStuatus={reNewStuatus} toDoList={toDoList}/>
        <Footer/>
    </div>
}
 

export default App;
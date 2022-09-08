// import React from 'react';
//components
import React, { useState } from 'react';
import { currentTodoes } from "./CurrentTodoes.js";
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import ToDoList from "./ToDoList";
import Footer from './Footer.jsx';

function App() {
    const [toDoList, setToDoList] = useState(currentTodoes);
    const listOfDone = toDoList.filter((element) => element.complete);
    const listOfActive = toDoList.filter((element) => !element.complete);
    const [activeFilter, setActiveFilter] = useState("all");
    const reNewStuatus = (id, status) => {
        const copyOfToDo = [...toDoList];
        const toDo = copyOfToDo.find((element) => element.id === id);
        toDo.complete = status;
        setToDoList(copyOfToDo);
    }
    const onlyCompleted = () => {
        setActiveFilter("completed");
    }
    const onlyActive = () => {
        setActiveFilter("active");
    }
    const all = () => {
        setActiveFilter("all");
    }
    const clearCompleted = () => {
        setActiveFilter("active");
        const listOfActive = toDoList.filter((element) => !element.complete);
        setToDoList(listOfActive);
    }

    const deleteTodo = (id) => {
        const removeTodoIndex = toDoList.findIndex((e)=> e.id === id);
        // copies list
        const removeList = toDoList.slice();
        removeList.splice(removeTodoIndex,1);
        setToDoList(removeList);
    }


    return <div className='card'>
        <Header />
        <CreateTodo setToDoList={setToDoList} />
        <ToDoList deleteTodo={deleteTodo}  reNewStuatus={reNewStuatus} toDoList={activeFilter === "all" ? toDoList : activeFilter === "completed" ? listOfDone : listOfActive} />
        <Footer onlyCompleted={onlyCompleted} onlyActive={onlyActive} clearCompleted={clearCompleted} all={all} toDoList={toDoList} />
    </div>
}


export default App;
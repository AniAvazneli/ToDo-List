import React, { useState } from 'react';
import { currentTodoes } from "./CurrentTodoes.js";
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import ToDoList from "./ToDoList";
import Footer from './Footer.jsx';

function App() {
    const [darkMode, setDarkMode] = useState(true);
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
        const removeTodoIndex = toDoList.findIndex((e) => e.id === id);
        const removeList = toDoList.slice();
        removeList.splice(removeTodoIndex, 1);
        setToDoList(removeList);
    }
    const changeTheme = () => {
        setDarkMode(!darkMode);
        if(darkMode){
            document.querySelector("body").style.backgroundColor = "#393A4B"
        }else{
            document.querySelector("body").style.backgroundColor = "#F2F2F2"
        }
    }


    return <div className= {darkMode ? "card": "nightCard"}>
        <Header changeTheme={changeTheme} darkMode={darkMode}/>
        <CreateTodo changeTheme={changeTheme} darkMode={darkMode} setToDoList={setToDoList} />
        <ToDoList changeTheme={changeTheme} darkMode={darkMode} deleteTodo={deleteTodo} reNewStuatus={reNewStuatus} toDoList={activeFilter === "all" ? toDoList : activeFilter === "completed" ? listOfDone : listOfActive} />
        <Footer changeTheme={changeTheme} darkMode={darkMode} onlyCompleted={onlyCompleted} onlyActive={onlyActive} clearCompleted={clearCompleted} all={all} toDoList={toDoList} />
    </div>
}


export default App;
import React from 'react';
import { useState } from 'react';
import Cross from './images/icon-cross.svg';

const ToDo = (props) => {
    const [todoClass, setTodoClass] = useState("");
    const isLoggedIn = false;
    const handleChange = event => {
        if (event.target.checked) {
            props.reNewStuatus(props.todo.id, true);
            setTodoClass("isDone");
        } else {
            props.reNewStuatus(props.todo.id, false);
            setTodoClass("");
        }
    };
    const removeChecked = event =>{
        if (event.target.checked) {
            props.reNewStuatus(props.todo.id, false);
            setTodoClass("");
        } else {
            props.reNewStuatus(props.todo.id, true);
            setTodoClass("isDone");
        }
    }

    return (
        <li className={`listItem ${todoClass}`}>
            <div className="todoesWithoutHr">
                <div className='todoesWithoutX'>
                    <input onChange={handleChange} onClick={removeChecked} className="checkbox" type="radio" />
                    <h3 className="todoTexts">{props.todo.task}</h3>
                </div>
                <button>
                    <img className="xImage" src={Cross} alt="cross" style={isLoggedIn ? styles.cross : styles.other} />
                </button>
            </div>
            <hr></hr>
        </li>
    );
};

export default ToDo;

const styles = {
    cross: {
        width: 12,
        backgroundColor: 'red'
    }
};
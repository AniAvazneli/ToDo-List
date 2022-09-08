import React from 'react';
import { useState } from 'react';
import Cross from './images/icon-cross.svg';

const ToDo = (props) => {
    const [btnState, setBtnState] = useState(false);
    function handleClick() {
        setBtnState(!props.todo.complete);
        if (props.todo.complete) {
            props.reNewStuatus(props.todo.id, false);
        } else {
            props.reNewStuatus(props.todo.id, true);
        }
    }

    const deleteHendler = () => {
        props.deleteTodo(props.todo.id);
    }


    return (
        <li className={`listItem`}>
            <div className="todoesWithoutHr">
                <div className='todoesWithoutX'>
                    <input id={props.todo.id} checked={props.todo.complete} onChange={handleClick} className={`checkbox ${props.todo.complete ? "active" : props.todo.all}`} type="checkbox" />
                    <label htmlFor={props.todo.id} className={`todoTexts ${props.todo.complete ? "active" : ""}`}>{props.todo.task}</label>
                </div>
                <button onClick={deleteHendler}>
                    <img  className="xImage" src={Cross} alt="cross" />
                </button>
            </div>
            <hr></hr>
        </li>
    );
};

export default ToDo;

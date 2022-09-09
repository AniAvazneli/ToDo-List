import React from 'react';
import Cross from './images/icon-cross.svg';

const ToDo = (props) => {
    function handleClick() {
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
                    <input id={props.todo.id} checked={props.todo.complete} onChange={handleClick} className={`checkbox ${props.todo.complete ? "active" : props.todo.all} ${props.darkmode ? "" :"darkCheckbox"}`}  type="checkbox" />
                    <label htmlFor={props.todo.id} className={`todoTexts ${props.todo.complete ? "active" : ""}`}>{props.todo.task}</label>
                </div>
                <button className='deleteBtn' onClick={deleteHendler}>
                    <img className='xImage' src={Cross} alt="cross" />
                </button>
            </div>
            <hr></hr>
        </li>
    );
};

export default ToDo;

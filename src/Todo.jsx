import React from 'react';
import { useState } from 'react';
import Cross from './images/icon-cross.svg';

const ToDo = (props) => {
    // const [todoClass, setTodoClass] = useState("");
    const [btnState, setBtnState] = useState(false);
    function handleClick(){
        setBtnState(!btnState);
        console.log(btnState);
    } 
    

    return (
        <li className={`listItem`}>
            <div className="todoesWithoutHr">
                <div className='todoesWithoutX'>
                    <input onChange={handleClick} className={`checkbox ${btnState ? "active": ""}`} type="checkbox" />
                    <h3 className={`todoTexts ${btnState ? "active": ""}`}>{props.todo.task}</h3>
                </div>
                <button>
                    <img className="xImage" src={Cross} alt="cross" />
                </button>
            </div>
            <hr></hr>
        </li>
    );
};

export default ToDo;


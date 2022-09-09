import { useState } from 'react';

const CreateTodo = (props) => {
    const [textareaValue, setTextareaValue] = useState("");
    const [checkedStatus, setCheckedStatus] = useState(false);
    const pickValue = (event) => {
        setTextareaValue(event.target.value);
    }
    const handleClick = (e) => {
        if (textareaValue && e.keyCode === 13) {
            props.setToDoList((prev) => [...prev, {
                id: Math.random(),
                task: textareaValue,
                complete: false
            }]);
            setTextareaValue("");
        }
    }
    const checkBoxClick = (e) => {
        if (textareaValue){
            props.setToDoList((prev) => [...prev, {
                id: Math.random(),
                task: textareaValue,
                complete: false
            }]);
            setTextareaValue("");
            setCheckedStatus(false);
        }
    }
    return (<div className={props.darkMode ? "createTodo": "createTodoDark"}>
        <input onChange={checkBoxClick} checked={checkedStatus} className={props.darkMode ? "checkbox" : "darkcheckbox"} type="radio" />
        <input type="text" onKeyDown={handleClick} className={props.darkMode ? "checkboxTextarea" : "darkcheckboxTextarea"} onChange={pickValue} value={textareaValue} placeholder="Create a new todo…" />
    </div>);
}




export default CreateTodo;
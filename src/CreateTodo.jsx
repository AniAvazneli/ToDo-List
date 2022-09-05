import { useState } from 'react';

const CreateTodo = (props) => {
    const [textareaValue, setTextareaValue] = useState("");
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
    return (<div className="createTodo">
        <input className="checkbox" type="checkbox" />
        <input type="text" onKeyDown={handleClick} onChange={pickValue} value={textareaValue} placeholder="Create a new todo…" />
    </div>);
}




export default CreateTodo;
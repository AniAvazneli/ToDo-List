import { useState } from 'react';
import currentTodoes from "./CurrentTodoes";

const CreateTodo = () => {
    const [textareaValue, settextareaValue] = useState("");
    const pickValue = (event) => {
        settextareaValue(event.target.value);
    }
    const handleClick = () => {
        if (textareaValue) {
            settextareaValue("");
        }
    }
    return (<div className="createTodo">
        <input onClick={handleClick} className="checkbox" type="checkbox" />
        <textarea onChange={pickValue} value={textareaValue} placeholder="Create a new todo…"></textarea>
    </div>);
}




export default CreateTodo;
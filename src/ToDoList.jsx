import React from 'react';
import ToDo from './Todo';
 
 
const ToDoList = (props) => {
   return (
       <ul className='TodoList'>
           {props.toDoList.map(todo => {
               return (
                <div key={todo.id}>
                   <ToDo deleteTodo={props.deleteTodo}  reNewStuatus={props.reNewStuatus} todo={todo} />
                </div>
               )
           })}
       </ul>
   );
};
 
export default ToDoList;
import React from 'react';
import ToDo from './Todo';
 
 
const ToDoList = (props) => {
   return (
       <ul>
           {props.toDoList.map(todo => {
               return (
                   <ToDo todo={todo} />
               )
           })}
       </ul>
   );
};
 
export default ToDoList;
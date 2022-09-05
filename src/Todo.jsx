import React from 'react';
 
const ToDo = (props) => {
   return (
       <li>
           {props.todo.task}
       </li>
   );
};
 
export default ToDo;
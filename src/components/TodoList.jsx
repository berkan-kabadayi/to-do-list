import React from "react";
import { List } from "../styles/StyledComponents";
import TodoItem from "./TodoItem";


function TodoList({ items , onDelete, onEdit }) {
  return <>
   <List>
    <h2>To-Do-List</h2>
    {items.map((item) => (
        <TodoItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
        />
    ))}
   </List>
  </>;
}

export default TodoList;

import React, { useEffect, useState } from "react";
import { ActionTypes, useTodoContext } from "../../hooks/useTodoContext";

export const TodoList = () => {
  const {
    state: { todoList },
    dispatch,
  } = useTodoContext();
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => setFilteredTodoList(todoList), [todoList]);

  const handleToggleStateClick = (todoId: number) =>
    dispatch({
      type: ActionTypes.toggleTodoState,
      payload: { updateTodoId: todoId },
    });

  const handleRemoveTodoClick = (todoId: number) =>
    dispatch({
      type: ActionTypes.removeTodo,
      payload: { updateTodoId: todoId },
    });

  return (
    <div>
      {filteredTodoList.map((todo, index) => (
        <div key={`${todo.id}-${index}`}>
          #{todo.id} {todo.value} {todo.state}
          <button onClick={() => handleToggleStateClick(todo.id)}>
            Toggle state
          </button>
          <button onClick={() => handleRemoveTodoClick(todo.id)}>Remove</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

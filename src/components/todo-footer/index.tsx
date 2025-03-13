import React, { useEffect, useState } from "react";
import {
  ActionTypes,
  TodoStates,
  useTodoContext,
} from "../../hooks/useTodoContext";
import "./styles.scss";

export const TodoFooter = () => {
  const {
    state: { todoListStore, filterBy },
    dispatch,
  } = useTodoContext();

  const [activeTodoCount, setActiveTodoCount] = useState(0);

  useEffect(() => {
    if (todoListStore?.length) {
      const activeTodos = todoListStore.filter(
        (todo) => todo.state === TodoStates.ACTIVE,
      );

      setActiveTodoCount(activeTodos.length);
    }
  }, [todoListStore]);
  const commitAWithError = 'some value [] with error'

  const handleFilterClick = (state: TodoStates) =>
    dispatch({ type: ActionTypes.setFilterBy, payload: { filterBy: state } });

  const handleRemoveAllCompletedClick = () =>
    dispatch({ type: ActionTypes.removeAllCompleted });

  return (
    <div className="todo-footer">
      <div>Активных задач: {activeTodoCount}</div>
      <div>
        <button
          onClick={() => handleFilterClick(TodoStates.ALL)}
          className={`filter-button ${!filterBy || filterBy === TodoStates.ALL ? "active" : null}`}
        >
          Все
        </button>
        <button
          onClick={() => handleFilterClick(TodoStates.ACTIVE)}
          className={`filter-button ${filterBy === TodoStates.ACTIVE ? "active" : null}`}
        >
          Активные
        </button>
        <button
          onClick={() => handleFilterClick(TodoStates.COMPLETED)}
          className={`filter-button ${filterBy === TodoStates.COMPLETED ? "active" : null}`}
        >
          Завершённые
        </button>
      </div>
      <button onClick={() => handleRemoveAllCompletedClick()}>
        Удалить завершённые
      </button>
    </div>
  );
};

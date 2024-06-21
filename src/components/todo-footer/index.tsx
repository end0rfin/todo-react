import React from "react";
import {
  ActionTypes,
  TodoStates,
  useTodoContext,
} from "../../hooks/useTodoContext";

export const TodoFooter = () => {
  const {
    state: { todoListStore },
    dispatch,
  } = useTodoContext();

  const todoListCount = todoListStore ? todoListStore.length : 0;

  const handleFilterClick = (state: TodoStates) =>
    dispatch({ type: ActionTypes.setFilterBy, payload: { filterBy: state } });

  const handleRemoveAllCompletedClick = () =>
    dispatch({ type: ActionTypes.removeAllCompleted });

  return (
    <div>
      Активных задач: {todoListCount}
      <button onClick={() => handleFilterClick(TodoStates.ALL)}>
        filterBy ALL
      </button>
      <button onClick={() => handleFilterClick(TodoStates.ACTIVE)}>
        filterBy ACTIVE
      </button>
      <button onClick={() => handleFilterClick(TodoStates.COMPLETED)}>
        filterBy COMPLETED
      </button>
      <button onClick={() => handleRemoveAllCompletedClick()}>
        clear all COMPLETED
      </button>
    </div>
  );
};

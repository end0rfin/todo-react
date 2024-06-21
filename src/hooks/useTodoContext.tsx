import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export enum TodoStates {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}
export type TodoItem = {
  id: number;
  state: TodoStates;
  value: string;
};
type State = {
  todoListStore?: TodoItem[];
  todoList?: TodoItem[];
  newTodoValue?: string;
  newTodoId?: string;
  updateTodoId?: number;
  filterBy?: TodoStates;
};
export enum ActionTypes {
  setNewTodo = "setNewTodo",
  addNewTodo = "addNewTodo",
  setFilterBy = "setFilterBy",
  toggleTodoState = "toggleTodoState",
  setTodoListStore = "setTodoListStore",
  removeTodo = "removeTodo",
  removeAllCompleted = "removeAllCompleted",
  null = null,
}
type Action = {
  type: ActionTypes;
  payload?: State;
};
type Dispatch = (action: Action) => void;
type TodoProviderProps = {
  children: ReactNode;
};

const DEFAULT_STATE: State = {
  todoList: [],
};

const TodoProviderContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>({ state: DEFAULT_STATE, dispatch: undefined });

const updateLocalStorageTodoList = (newTodoList: TodoItem[]) => {
  localStorage.setItem("todo-list-store", JSON.stringify(newTodoList));
};

const todoReducer = (state: State, action: Action): State => {
  const newTodoId = new Date().valueOf();

  switch (action.type) {
    case ActionTypes.setTodoListStore: {
      updateLocalStorageTodoList(action.payload.todoListStore);

      return {
        ...state,
        todoListStore: action.payload.todoListStore,
        todoList: action.payload.todoListStore,
      };
    }
    case ActionTypes.setFilterBy: {
      let updatedTodoList = state.todoListStore;

      if (
        action.payload.filterBy &&
        action.payload.filterBy !== TodoStates.ALL
      ) {
        updatedTodoList = state.todoListStore.filter(
          (todo) =>
            action.payload.filterBy && todo.state === action.payload.filterBy,
        );
      }

      return {
        ...state,
        filterBy: action.payload.filterBy,
        todoList: updatedTodoList,
      };
    }
    case ActionTypes.setNewTodo: {
      return {
        ...state,
        newTodoValue: action.payload.newTodoValue,
      };
    }
    case ActionTypes.addNewTodo: {
      const newTodo: TodoItem = {
        id: newTodoId,
        state: TodoStates.ACTIVE,
        value: state.newTodoValue,
      };

      updateLocalStorageTodoList([...state.todoListStore, newTodo]);

      return {
        ...state,
        todoList: [...state.todoList, newTodo],
        todoListStore: [...state.todoListStore, newTodo],
        newTodoValue: "",
      };
    }
    case ActionTypes.toggleTodoState: {
      const toggledTodoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.updateTodoId) {
          todo.state =
            todo.state === TodoStates.COMPLETED
              ? TodoStates.ACTIVE
              : TodoStates.COMPLETED;
        }
        return todo;
      });

      updateLocalStorageTodoList(toggledTodoList);

      return {
        ...state,
        todoList: toggledTodoList,
        todoListStore: toggledTodoList,
        newTodoValue: "",
      };
    }
    case ActionTypes.removeTodo: {
      const removedTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.updateTodoId,
      );

      updateLocalStorageTodoList(removedTodoList);

      return {
        ...state,
        todoList: removedTodoList,
        todoListStore: removedTodoList,
        newTodoValue: "",
      };
    }
    case ActionTypes.removeAllCompleted: {
      const removedAllTodoList = state.todoList.filter(
        (todo) => todo.state !== "COMPLETED",
      );

      updateLocalStorageTodoList(removedAllTodoList);

      return {
        ...state,
        todoList: removedAllTodoList,
        todoListStore: removedAllTodoList,
        newTodoValue: "",
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, { todoList: [] });

  const value = { state, dispatch };

  useEffect(() => {
    const localTodoList = localStorage.getItem("todo-list-store");
    const todoListStore = localTodoList ? JSON.parse(localTodoList) : [];

    dispatch({
      type: ActionTypes.setTodoListStore,
      payload: { todoListStore },
    });
  }, []);

  return (
    <TodoProviderContext.Provider value={value}>
      {children}
    </TodoProviderContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoProviderContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a TodoProvider");
  }

  return context;
};

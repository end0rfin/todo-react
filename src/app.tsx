import { createRoot } from "react-dom/client";
import { Header } from "./components/header";
import { TodoFooter } from "./components/todo-footer";
import { TodoInputForm } from "./components/todo-input-form";
import { TodoList } from "./components/todo-list";
import { useTheme } from "./hooks/useTheme";
import { TodoProvider } from "./hooks/useTodoContext";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="todo-app">
      <Header />
      <TodoProvider>
        <TodoInputForm />
        <TodoList />
        <TodoFooter />
        <button onClick={toggleTheme}>Сменить тему</button>
        Текущая тема: {theme}
      </TodoProvider>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);

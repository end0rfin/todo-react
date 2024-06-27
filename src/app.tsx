import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/header";
import { TodoFooter } from "./components/todo-footer";
import { TodoInputForm } from "./components/todo-input-form";
import { TodoList } from "./components/todo-list";
import { useTheme } from "./hooks/useTheme";
import { TodoProvider } from "./hooks/useTodoContext";
import "./assets/styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  const suspenseFallback = () => <div>Загрузка списка</div>;

  return (
    <div className={`todo-app-container ${theme}`}>
      <div className="todo-app">
        <Header toggleTheme={toggleTheme} />
        <Suspense fallback={suspenseFallback()}>
          <TodoProvider>
            <div className="todo-content-container">
              <TodoInputForm />
              <TodoList />
              <TodoFooter />
            </div>
          </TodoProvider>
        </Suspense>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);

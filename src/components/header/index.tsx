import React from "react";
import "./styles.scss";

type HeaderProps = {
  toggleTheme: () => void;
};

export const Header = ({ toggleTheme }: HeaderProps) => (
  <div className="todo-header-container">
    <div className="todo-header">Задачник</div>
    <button onClick={toggleTheme}>Сменить тему</button>
  </div>
);

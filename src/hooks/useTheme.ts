import { useEffect, useState } from "react";

export const useTheme = () => {
  const { 0: theme, 1: setTheme } = useState("light");

  const toggleTheme = () => {
    const toggledTheme = theme !== "dark" ? "dark" : "light";

    localStorage.setItem("theme", toggledTheme);
    setTheme(toggledTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};

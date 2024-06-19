import { useEffect, useState } from "react";

export enum Theme {
  mood = "mood",
  warm = "warm",
}

export const useTheme = () => {
  const { 0: theme, 1: setTheme } = useState(Theme.mood);

  const toggleTheme = () => {
    const toggledTheme = theme !== Theme.warm ? Theme.warm : Theme.mood;

    localStorage.setItem("theme", toggledTheme);
    setTheme(toggledTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme;

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};

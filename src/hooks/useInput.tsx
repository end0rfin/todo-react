import { useState, ChangeEvent } from "react";

export const useInput = (initial: string, required: boolean) => {
  const { 0: value, 1: setValue } = useState<string>(initial);
  const { 0: error, 1: setError } = useState(null);

  return {
    value,
    error,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    onBlur: (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value && required) setError("Required field");
      else setError(null);
    },
  };
};

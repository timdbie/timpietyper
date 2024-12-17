import { useState, useEffect, useCallback } from "react";

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  const startTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsActive(false);
  }, []);

  const resetTimer = useCallback((newTime: number) => {
    setTime(newTime);
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      const timeoutId = window.setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else if (time === 0) {
      setIsActive(false);
    }
  }, [isActive, time]);

  return { time, startTimer, stopTimer, resetTimer, isActive };
};

export default useTimer;

import React, { useRef } from 'react';

export default function TimerExample() {
  const timerRef = useRef(); // Step 1: Store timeout ID

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      alert("Time's up!");
    }, 5000);
    console.log("Timer started...");
  };

  const stopTimer = () => {
    clearTimeout(timerRef.current);
    console.log("Timer stopped.");
  };

  return (
    <div>
      <button onClick={startTimer}>Start 5s Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

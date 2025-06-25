/* Build a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown.*/
'use client'
import { useState,useRef } from "react";

const useTimer = (initialTime = 0) => {

    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return ; 
        setIsRunning(true);
        
        intervalRef.current = setInterval(() => {
           setTime((prevTime) => {
               if (prevTime <= 1) {
                   clearInterval(intervalRef.current);
                   intervalRef.current = null;
                   setIsRunning(false);
                   return 0;
               }
               return prevTime - 1;
           });
       }, 1000);

    };

    const pauseTimer = () => {
       if (intervalRef.current) {
           clearInterval(intervalRef.current);
           intervalRef.current = null;
           setIsRunning(false);
       }
   };

   const resetTimer = () => {
       pauseTimer();
       setTime(initialTime);
    };

    return {time, isRunning, startTimer, pauseTimer, resetTimer};
};

const Countdown = () => {
    const {time, startTimer, pauseTimer, resetTimer} = useTimer(10);
    
    return (
        <div>
            <h2>Countdown Timer</h2>
            <h3>{time} seconds</h3>

            <button style ={{marginRight : "10px"}}onClick={startTimer}>start</button>
            <button style ={{marginRight : "10px"}}onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
};

export default Countdown; 
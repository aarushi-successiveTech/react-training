/* Create a functional component called Clock.
Use the useState hook to manage a state variable named time initialized to the current time.
Use the useEffect hook to update the time state every second to display the current time.
Render the current time in a <p> element.
When the component unmounts, clear the interval to stop updating the time. */

'use client'
import { useState, useEffect } from "react"; 

const Clock = () => {
    let [time , setTime] = useState(new Date().toLocaleTimeString()); 

    useEffect (()=>{
        const Intervalid = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(Intervalid); 
    }, []); 

    return (
        <div>
            <h1>Current Time : </h1>
            <h1>{time}</h1>

        </div>
    )
}
export default Clock; 

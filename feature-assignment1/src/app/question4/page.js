/*Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
Display the updated count on the screen. */
"use client"; 
import { useState } from "react";

const Component = () => {
    let [counter , setCounter] = useState(0);
   

    const addValue = () => {
        /*console.log("clicked", counter);*/
        counter += 1 ;
        setCounter(counter);  
    }

    const removeValue = () => {
        /*console.log("removed", counter);*/
        counter -= 1;
        setCounter(counter); 
    }

    return (
        <div>
            <h2>Counter Value : {counter}</h2>
            <br/>
            <button 
            onClick={addValue}>Increment</button>
            <br/><br/>
            <button 
            onClick={removeValue}>Decrement</button>
        </div>
        
    )
}

export default Component ; 
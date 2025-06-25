/*Create a functional component called Counter.
Inside the component, use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
When the user clicks on the buttons, update the count state accordingly. */ 
'use client'
import { useState } from "react";

const Counter = () => {
    let [count , setCount] = useState(0);

    const increment = () => {
        count += 1 ; 
        setCount(count); 
    }

    const decrement = () => {
        count -= 1 ; 
        setCount(count);
    }

    return(
        <div>
            <p>Count value = {count}</p>
            <button onClick={increment}>Increment</button><br/><br/>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    )

}
export default Counter; 
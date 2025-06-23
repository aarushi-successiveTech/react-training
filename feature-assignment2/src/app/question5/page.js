/* Create a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.
Update the count using the specified step value when the buttons are clicked. */
'use client'

import { useState } from "react";

 

const CounterWithStep = () =>{
    let [count , setCount] = useState(1); 
    let [inputStep , setInputStep] = useState(''); 

    const addValue = () =>{ 
        setCount(count + Number(inputStep)); 
    }

    const reduceValue = () => {
        setCount(count - Number(inputStep));
    }

    return(
        <div>
            <input 
            type = 'number'
            placeholder="enter step value :"
            value={inputStep}
            onChange={(e) => setInputStep(e.target.value)}/>
            
            <br/><br/>

            <h2>Count : {count}</h2>
            <button onClick={addValue}>Increment</button>
            <br/>
            <button onClick = {reduceValue}>Decrement</button>
        </div>
    )
}
export default CounterWithStep; 
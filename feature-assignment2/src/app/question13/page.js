/* create two components: Parent and Child.
In the Parent component, maintain a count state.
Pass a callback function from the Parent to the Child that increments the count.
Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
Display the count in the Child component.
Implement a button in the Child component that resets the count to zero when clicked. */

'use client'
import { useCallback, useState } from "react";
const Child = ({count, onIncrement, onReset}) => {
    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};
const Parent = () => {
    const [count, setCount] = useState(0);

    const increment =useCallback(() => { 
        setCount((prev) => prev + 1); 
    }, []);

    const reset = useCallback(() => {
        setCount(0);
    },[]);

    return (
        <div>
            <Child count ={count} onIncrement ={increment} onReset = {reset} />
        </div>
    )

}
export default Parent; 
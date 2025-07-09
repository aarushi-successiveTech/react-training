'use client'

import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count : <span data-testid="count">{count}</span></h2>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            <br />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
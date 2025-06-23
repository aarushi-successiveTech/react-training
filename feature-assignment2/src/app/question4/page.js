/* Create a functional component called RandomNumberGenerator.
Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
Render the current value of randomNumber.
Add a button that generates a new random number and updates the state when clicked. */
'use client'
const { useState } = require("react")

const RandomNumberGenerator = () => {
    let [randomNumber, setRandomNumber] = useState(10);

    return (
        <div>
            <h1>Random Number = {randomNumber}</h1>
            <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100) + 1 )}>Generate New</button>
        </div>
        
        
    )
}
export default RandomNumberGenerator; 
'use client'
import { useState } from "react"

const ValidInput = () => {

    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () =>{
        if(input.toLowerCase() ==='show'){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    return (
        <div>
            <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}

            />
            <button onClick={handleClick}>show</button>

            {show && <p>Hello! This is a secret message!</p>}
        </div>
    );
}

export default ValidInput; 
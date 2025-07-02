'use client'

import { useState } from "react"
const UserForm = () => {

    const [input, setInput] = useState('')

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    return (
        <div style={{marginLeft:'50px'}}>  
            <br />
            <br />      
        <input style={{padding : '10px'}}
        type="text"
        onChange={handleInput}
        placeholder="enter input"

        />
        <br />
        <br />
        <p>Input : {input}</p>

        </div>



    );
}

export default UserForm; 
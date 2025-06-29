'use client'
import { useState } from "react"

const Preferences = () => {

    const [option , setOption] = useState('');

    const handleOption = (e) =>{
        setOption(e.target.value);
    };


    return (
        <div>
            <label>select your Preference</label>
            <select value={option} onChange={handleOption}>

                <option value=""> choose </option>
                <option value="medical">medical</option>
                <option value="nonmedical">non-medical</option>
                <option value="arts">arts</option>
            </select>
            {option && <p>Selected Preference : {option}</p>}
        </div>
        
    );

}

export default Preferences;
'use client'
import { useState } from "react"

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')

    const handleCelsius =(e) => {

        const c = e.target.value;
        setCelsius(c)
        setFahrenheit(c === '' ? '' : (c * 9/5 + 32).toFixed(2));

    };

    const handleFahrenheit = (e) => {
        const f = e.target.value;
        setFahrenheit(f)
        setCelsius(f ==='' ? '' : ((f-32) * 5/9).toFixed(2));
    }

    return (
        <div>
            <input 
            type="number"
            value={celsius}
            onChange={handleCelsius}
            placeholder="enter celsius temperature"
            />

            <br/>

            <input 
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheit}
            placeholder="enter fahrenheit temperature"
            />
        </div>
    )

}

export default TemperatureConverter;
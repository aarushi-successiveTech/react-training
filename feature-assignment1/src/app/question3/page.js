/* Create a functional component named Weather that accepts a prop called temperature (a number).
Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
Import and render the Weather component in the App component with different temperature values.*/

import TemperatureComponent from "./Temperature"; 

const Weather = () =>{
    return (
        <div>
            <h1>Weather check</h1>

            <TemperatureComponent
            temperature= {30} />
            <TemperatureComponent 
            temperature = {5} />
        </div>
    ); 
}

export default Weather ;
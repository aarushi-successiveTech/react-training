const TemperatureComponent = (props) => {
    const temperature = props.temperature;

    let message = '';
    if(temperature > 25){
        message = 'It is sunny today!'
    }
    else if(temperature < 10){
        message = "It's cold today!"
    }
    else{
        message = 'Weather is normal!'
    }

    return(
        <div>
            <h2>Temperature : {temperature}</h2>
            <p>{message}</p>
        </div>
    );
}

export default TemperatureComponent; 
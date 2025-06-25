'use client'; 
import { useState } from "react";
const ButtonFunction = ({text,color}) => {

    const [current, setCurrent] = useState(color); 

    const onClick = () => {
        setCurrent((prevColor) => 
            prevColor === color ?  'pink' : color )
    };


    const buttonStyle = {
        backgroundColor : current , 
        color : 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px'
    }
    return <button style={buttonStyle} onClick={onClick}>{text}</button>
};

export default ButtonFunction ; 
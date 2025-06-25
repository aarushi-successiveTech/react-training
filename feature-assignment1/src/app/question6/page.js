/*Create a functional component named Button that accepts props for text and color.
Style the button using inline styles or CSS classes based on the color prop.
Import and render the Button component in the App component with different text and color props. */
'use client'
import ButtonFunction from "./Button";


const Button = () => {
    return (
        <div style={{padding:'20px'}}>
            <h1>Custom Buttons</h1>
            <ButtonFunction text = 'Button1' color= 'pink'/>
            <ButtonFunction text = 'Button2' color= 'blue'/>
        </div>
    )
};

export default Button; 
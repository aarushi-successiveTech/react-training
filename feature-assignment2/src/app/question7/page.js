/* Create a functional component called Notification.
Use the useState hook to manage a state variable named message initialized to an empty string.
Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
Render the notification message in a <div> element.
After 5 seconds, clear the message to hide the notification. */
'use client'
import { useState, useEffect } from 'react'; 

const Notification = () => {
    let [message , setMessage] = useState(''); 

    useEffect(() =>{
        if(message){
            const timer = setTimeout(() =>{
                setMessage('')
            }, 5000); 

            return () => clearTimeout(timer); 
        }
    }, [message])

    return (
        <div>
            <button onClick={()=> setMessage("this is a notification")}>
                Show Notification
            </button>
            {message && <h2>{message}</h2>}
        </div>
    )

}

export default Notification ; 
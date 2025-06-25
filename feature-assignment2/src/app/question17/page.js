/* Build a custom hook named useClipboard for copying text to the clipboard.
Implement a useClipboard hook that takes a text value as a parameter.
Use the document.execCommand API to copy the provided text to the clipboard.
Return a success status and methods to trigger the copying action.
Develop a component that uses the useClipboard hook to provide a copy button for text. */
'use client'
import { useState } from "react";


const useClipboard = (text) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (text) => {

    const input = document.createElement('input');
    input.value = text; 
    document.body.appendChild(input);
    input.select();

    try{
      const success= document.execCommand('copy');
      setCopy(success);
    }
    catch(err){
      setCopy(err);
    }

    
    document.body.removeChild(input);
    setTimeout(() => setCopy(false), 2000)
  }

  return {copy, copyToClipboard};

}

const ClipboardText = () => {

  const text = 'Lets copy This Text '; 
  const {copy, copyToClipboard} = useClipboard(text); 

  return(
    <div>
      <h1>{text}</h1>
      <button onClick={() => copyToClipboard(text)}>{copy ? 'Copied' : 'Copy'}</button>
    </div>
  )

};

export default ClipboardText; 
/* Build a custom hook named useClipboard for copying text to the clipboard.
Implement a useClipboard hook that takes a text value as a parameter.
Use the document.execCommand API to copy the provided text to the clipboard.
Return a success status and methods to trigger the copying action.
Develop a component that uses the useClipboard hook to provide a copy button for text. */

import { useState } from 'react';

const  useClipboard = (text) =>{
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const success = document.execCommand('copy');
      setCopied(success);
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopied(false);
    }

    document.body.removeChild(textarea);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copyToClipboard };
}

export default useClipboard;

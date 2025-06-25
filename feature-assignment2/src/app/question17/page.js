'use client';
import React from 'react';
import UseClipboard from './UseClipboard';

const ClipboardComponent=() =>{
  const textToCopy = 'Hello from Clipboard!';
  const { copied, copyToClipboard } = UseClipboard(textToCopy);

  return (
    <div>
      <p>{textToCopy}</p>
      <button onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy Text'}
      </button>
    </div>
  );
}

export default ClipboardComponent;

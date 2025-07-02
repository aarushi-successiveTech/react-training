"use client";

import { useState, useEffect, useRef } from 'react';
const withLogger = (WrappedComponent) => {

  return function WithLoggerComponent(props) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const isMounted = useRef(false);

   
    useEffect(() => {
      console.log(`%c[${componentName}] has MOUNTED.`, 'color: green; font-weight: bold;');

   
      return () => {
        console.log(`%c[${componentName}] is UNMOUNTING.`, 'color: red; font-weight: bold;');
      };
    }, []); 
    useEffect(() => {
      if (isMounted.current) {
        console.log(`%c[${componentName}] has UPDATED.`, 'color: blue; font-weight: bold;');
        console.log('  New props received:', props);
      } else {

        isMounted.current = true;
      }
    }); 
    return <WrappedComponent {...props} />;
  };
};


export default function HocLoggerDemo() {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('Hello World');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>HOC Logger Demo</h1>


      <div style={{ marginTop: '1.5rem' }}>
        <h3>Test Mount / Unmount</h3>
        <label>
          <input
            type="checkbox"
            checked={isVisible}
            onChange={() => setIsVisible(v => !v)}
          />
          Show the logged component
        </label>
      </div>

     
      <div style={{ marginTop: '1.5rem' }}>
        <h3>Test Update (Props)</h3>
        <label htmlFor="messageInput">Change component's prop message:</label>
        <br />
        <input
          id="messageInput"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ marginTop: '0.5rem', padding: '0.25rem' }}
        />
      </div>

      
      
    </main>
  );
}
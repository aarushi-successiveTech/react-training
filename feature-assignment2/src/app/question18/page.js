/* Design a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.
Develop a component that uses the useLocalStorage hook to manage user preferences.

*/

'use client';
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch (err) {
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
        } catch (err) {
            console.log(err);
        }
    };

    const getItem = () => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (err) {
            return null;
        }
    };

    const removeItem = () => {
        try {
            localStorage.removeItem(key);
            setStoredValue(null);
        } catch (err) {
            console.log(err);
        }
    };

    return { storedValue, setItem, getItem, removeItem };
};

const UserPreferences = () => {
    const [input, setInput] = useState('');
    const { storedValue, setItem, removeItem } = useLocalStorage('userPref', '');

    return (
        <div style={{ padding: '20px' }}>
            <h2>User Preferences</h2>

            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter preference"
                style={{ padding: '8px', width: '250px', marginRight: '10px' }}
            />

            <button onClick={() => setItem(input)} style={{ padding: '8px 12px', marginRight: '8px' }}>
                Save
            </button>

            <button onClick={removeItem} style={{ padding: '8px 12px' }}>
                Clear
            </button>

            <h3 style={{ marginTop: '20px' }}>Saved Preference: {storedValue}</h3>
        </div>
    )
};

export default function Page() {
    return <UserPreferences />;
}

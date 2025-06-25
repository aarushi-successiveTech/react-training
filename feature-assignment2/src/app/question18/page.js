/* Design a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.
Develop a component that uses the useLocalStorage hook to manage user preferences. */

'use client'
const { useState } = require("react")

const useLocalStorage =(key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value): initialValue;
        }
        catch(err){
            return initialValue;
        }
    });

    const setItem = (value) => {
        try{
            localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
        }
        catch(err){
            console.log(err);
        }
    };

    const getItem = () => {
        try{
            const value = localStorage.getItem(key);
            return value? JSON.parse(value) : null;
        } 

        catch(err){
            return null;
        }

    };

    const removeItem = () => {
        try{
            localStorage.removeItem(key);
            setStoredValue(null);
        }
        catch (err){
            console.log(err);
        }
    };

    return {storedValue, setItem, getItem, removeItem};

};

const UserPreferences = () =>{
    const [input, setInput] = useState('');
    const {storedValue, setItem, getItem, removeItem} = useLocalStorage('userPre', '');

    return(
        <div>
            <h2>User preferences</h2>
            <input 
            type = 'text'
            value = {input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your preference"
            />

            <button onClick={() => setItem(input)}>Save</button>
            <button onClick={removeItem}>Clear</button>
            <h3>Saved preferences: {storedValue}</h3>
        </div>
    )
};

export default UserPreferences;
/* Create a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme. */
'use client'
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext() ; 

const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState('light'); 
    return (
        <ThemeContext.Provider value = {{theme , setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

const PageContext = ()=>{
    const {theme, setTheme} = useContext(ThemeContext); 

    const pageStyle = {
    height: '100vh',
    margin: 0,
    padding: '20px',
    backgroundColor: theme === 'light' ? '#ffffff' : '#121212',
    color: theme === 'light' ? '#000000' : '#ffffff',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

    return (
        <div style={pageStyle}>
            <h2>Hi! Lets change the Theme here</h2>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light') }>
                Toggle Theme

            </button>
        </div>
    )
}; 

const Page = () => {
    return (
        <ThemeProvider>
            <PageContext /> 
        </ThemeProvider>
    )
}

export default Page ; 
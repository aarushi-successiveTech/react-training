'use client'

import { createContext, useState } from "react";

export const AuthContext = createContext(); 

export const AuthProvider = ({children}) => {

    const [logIn, setLogIn] = useState(false);
    const [username , setUsername] = useState('');

    const userLogin = (name, password) => {

        if(name == 'admin' && password ==='1234'){
            setUsername(name);
            setLogIn(true);
        return true};

            return false;
        }
        
    const userLogout = () => {
        setUsername('');
        setLogIn(false);}

    return (
        <AuthContext.Provider value = {{logIn, username, userLogin, userLogout}}>
            {children}
        </AuthContext.Provider>
    )
};

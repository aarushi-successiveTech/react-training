'use client'

import { useState } from "react";

const UserForm = () => {
    const [firstpassword , setFirstpassword] = useState('');
    const [secondpassword, setSeconspassword] = useState('');

    const validation = (e) =>{
        e.preventDefault();

        if(firstpassword === secondpassword){
            console.log('form submitted');
        }
        else{
            console.log('different passwords!')
        }
    };

    return (
        <form onSubmit={validation}>
            <div>
                <input 
                type="password"
                placeholder="password1"
                value={firstpassword}
                onChange={(e) => setFirstpassword(e.target.value)}
                />
            </div>

            <div>
                <input 
                type="password"
                placeholder="password2"
                value={secondpassword}
                onChange={(e) => setSeconspassword(e.target.value)}
                />
            </div>
            <button type="submit">submit</button>
        </form>
    );
}

export default UserForm;
'use client'

import { useState } from "react";

const UserForm = () => {
    const [formData, setFormData] = useState(
        {
            name : '',
            gender : '',
            subscribe : false
        }
    );

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (e.target.type == 'checkbox'){
            value = e.target.checked;
        }

        setFormData({
            ...formData,
            [name] : value
        });

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form submitted', formData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name : 

                 <div>
                <input 
                type="text"
                name= 'name'
                value={formData.name}
                onChange={handleChange}
                
                />
            </div>
            </label>
           

            <div>
                <label>Gender : </label>
                <label>
                    <input 
                type="radio"
                name= "gender"
                value={formData.gender ==='male'}
                onChange={handleChange}

                />
                Male
                </label>
                <label>
                    <input 
                type="radio"
                name= "gender"
                value={formData.gender === 'female'}
                onChange={handleChange}
                
                />
                Female
                </label>
                
            </div>
            <div>
                <label>subscribe</label>
                <input 
                type='checkbox'
                name="subscribe"
                checked={formData.agree}
                onChange={handleChange}

                />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
};

export default UserForm; 
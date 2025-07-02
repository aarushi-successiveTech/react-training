'use client'

import { useState } from "react"

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const items = ['medical', 'non-medical', 'arts', 'commerce'];

    const handleChange =(e) =>{
        setSearchTerm(e.target.value);
    }

    const filtered = items.filter(item => 

        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Search Here</h2>
            <input 
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="type your field"
            />

            <ul>
                {filtered.length > 0 ? (
                    filtered.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : <li>No results found</li>}
            </ul>
        </div>
    );
}

export default SearchFilter; 

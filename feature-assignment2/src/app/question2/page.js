/* Create a functional component called PersonForm.
Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
Render three input fields for the user to enter their first name, last name, and age.
As the user types, update the respective state variables.
Display the entered information below the input fields. */
'use client'
import { useState } from "react"; 

const PersonForm = () => {

    let [firstName , setFirstName] = useState(""); 
    let [lastName , setLastName] = useState("");
    let [age , setAge] = useState("");

    return(
        <div>
            <input 
            type = 'text'
            placeholder="enter first name: "
            value = {firstName}
            onChange={(e) => setFirstName(e.target.value)}>
            </input>
            <br/>
            <input
            type = 'text'
            placeholder="enter last name: "
            value = {lastName}
            onChange = {(e) => setLastName(e.target.value)}>
            </input>
            <br/>
            <input
            type = 'text'
            placeholder="enter age: "
            value = {age}
            onChange = {(e) => setAge(e.target.value)}></input>

            <br/>
            <h2>First Name : {firstName}</h2>
            <h2>Last Name : {lastName}</h2>
            <h2>Age : {age}</h2>
        </div>
    )
}
export default PersonForm ; 
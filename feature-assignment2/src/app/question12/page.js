/* Create a simple voting application using the useReducer hook.
Set up a reducer to manage the votes for different options.
Create buttons representing voting options.
Use the useReducer hook to access the votes state and dispatch actions.
Allow users to vote for their preferred options.
Display the current vote count for each option. */

'use client'
import { useReducer } from "react";

const initialStateA = {countA : 0, countB : 0};

const reducer = (state, action)=>{
    switch(action.type){
        case 'addA':
            return {...state, countA : state.countA + 1 };

        case 'addB':
            return {...state, countB : state.countB + 1};

        default: 
        return state; 
    }
};

const Voter = () => {
    const [state, dispatch] = useReducer(reducer, initialStateA);

    return(
        <div>
            <p>votes for A : {state.countA}</p>
            <p>votes for B : {state.countB}</p>

            <button onClick={() => dispatch({type : 'addA'})}>Vote-A</button>
            <button onClick={() => dispatch({type : 'addB'})}>Vote-B</button>
        </div>
    )
}

export default Voter ; 
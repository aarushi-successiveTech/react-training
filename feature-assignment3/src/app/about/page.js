'use client'
import { useContext, useEffect } from "react";
import { AuthContext } from "../question1/AuthContext";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    const {logIn, username} = useContext(AuthContext);

    useEffect(() => {
        if(!logIn){
            router.push('/login')
        }
    }, [logIn])

    return(
        <div>
            <h1>About Page</h1>
            <button onClick={() => router.push('/question1')}>Home</button>
        </div>
    )
};

export default About;
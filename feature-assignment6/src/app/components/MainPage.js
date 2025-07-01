'use client'

import dynamic from "next/dynamic";
import { useState } from "react";


const AboutComponent = dynamic(() => import('./about'),{
    loading : () => <p>Loading.....</p>,
    ssr: false
})

const MainPage = () =>{

    const [show , setShow] = useState(false);

    return (
        <div>
            <h1>Welcome to main page</h1>

            <button onClick={() => setShow(true)}>show About</button>
            {show && <AboutComponent/>}
        </div>
    );
}
export default MainPage;
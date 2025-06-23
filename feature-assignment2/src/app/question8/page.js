/* Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression. */ 

'use client'

const { useState } = require("react");

const slideshow = () => {
    const images = [
        '/images/image1.jpeg',
        '/images/image2.jpeg',
        '/images/image3.jpeg',
        '/images/image4.jpeg',
        '/images/image5.jpeg',
        '/images/image6.jpeg',
        '/images/image7.jpeg',
        '/images/image8.jpeg',
        '/images/image9.jpeg',
        '/images/image10.jpeg',
    ]; 

    let [currentSlide , setCurrentSlide] = useState(0)
    let [isPlaying , setIsPlaying] = useState(true)
    let [intervalTime , setIntervalTime] = useState(3000)
}
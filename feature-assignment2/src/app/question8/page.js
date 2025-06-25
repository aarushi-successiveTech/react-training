/* Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression. */ 

'use client';
import { useState, useEffect } from "react";

const Slideshow = () => {
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [intervalTime, setIntervalTime] = useState(3000);


    useEffect(() => {
        let slideInterval;
        if (isPlaying) {
            slideInterval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % images.length);
            }, intervalTime);
        }

        return () => clearInterval(slideInterval);
    }, [isPlaying, intervalTime]);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Slideshow</h2>

            <img 
                src={images[currentSlide]} 
                alt={`Slide ${currentSlide + 1}`}
                style={{ width: '400px', height: '250px', objectFit: 'cover', borderRadius: '8px' }}/>

            <p>Slide {currentSlide + 1} of {images.length}</p>

            <div style={{ marginTop: '15px' }}>
                <button onClick={() => setIsPlaying(true)} style={{ padding: '8px 12px', marginRight: '10px' }}>
                    Play
                </button>
                <button onClick={() => setIsPlaying(false)} style={{ padding: '8px 12px' }}>
                    Pause
                </button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <label>Interval (ms): </label>
                <input 
                    type="number"
                    value={intervalTime}
                    onChange={(e) => setIntervalTime(Number(e.target.value))}
                    style={{ padding: '6px', width: '100px' }}/>
            </div>
        </div>
    );
};

export default Slideshow;
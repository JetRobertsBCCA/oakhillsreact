import React, { useEffect, useState } from 'react';
import Pxl20250308162929633Copy1Jpg from '../assets/pxl_20250308_162929633_copy1.jpg';
import Pxl20250308162929633Jpg from '../assets/pxl_20250308_162929633.jpg';
import Pxl20250308163053898Jpg from '../assets/pxl_20250308_163053898.jpg';
import Pxl20250308163707963Jpg from '../assets/pxl_20250308_163707963.jpg';

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        Pxl20250308162929633Copy1Jpg,
        Pxl20250308162929633Jpg,
        Pxl20250308163053898Jpg,
        Pxl20250308163707963Jpg,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshowSection">
            <img 
                src={images[currentImageIndex]} 
                alt="Event Slide" 
                className="slideshowImage" 
            />
        </div>
    );
};

export default ImageCarousel;

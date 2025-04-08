import React, { useEffect, useState } from 'react';

const ImageCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const response = await fetch('/api/images');
            const data = await response.json();
            setImages(data);
        };

        loadImages();
    }, []);

    return (
        <div>
            {images.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt} />
            ))}
        </div>
    );
};

export default ImageCarousel;

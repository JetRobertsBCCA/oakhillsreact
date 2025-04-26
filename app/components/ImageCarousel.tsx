// src/components/ImageCarousel.tsx
import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; 

interface ImageCarouselProps {
    images: { url: string, alt: string }[];
    interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 500); // This should match your CSS transition duration
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 500); // This should match your CSS transition duration
    };

    const goToSlide = (index: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex(index);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 500);
    };

    return (
        <div className="carousel-container">
            <div className={`carousel-inner ${isTransitioning ? 'transitioning' : ''}`} style={{
                transform: `translateX(-${currentImageIndex * 100}%)`
            }}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="carousel-image" 
                        />
                    </div>
                ))}
            </div>
            
            <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous slide">
                &#10094;
            </button>
            <button className="carousel-control next" onClick={nextSlide} aria-label="Next slide">
                &#10095;
            </button>
            
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button 
                        key={index}
                        className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;

import React, { useState } from 'react';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const slideStyle = {
        backgroundImage: `url(${slides[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '20rem', // Adjust this as needed for minimum height
    };

    return (
        <div className="relative flex items-center justify-center w-full">
            <button onClick={goToPrevious} className="absolute left-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
                {'<'}
            </button>
            <div className="w-full" style={slideStyle}>
                {/* You can add additional elements or styles within this div if needed */}
            </div>
            <button onClick={goToNext} className="absolute right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
                {'>'}
            </button>
        </div>
    );
};

export default Slider;

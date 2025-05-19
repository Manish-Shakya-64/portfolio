import React, { useState, useRef, useEffect } from 'react';

const ImageSlider = ({ skills }) => {
    const sliderRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const visibleItems = 4; // Show 4 images at a time

    useEffect(() => {
        const container = sliderRef.current;
        if (container) {
            setMaxScroll(container.scrollWidth - container.clientWidth);
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [skills]);

    const handleScroll = () => {
        if (sliderRef.current) {
            setScrollPosition(sliderRef.current.scrollLeft);
            setMaxScroll(sliderRef.current.scrollWidth - sliderRef.current.clientWidth);
        }
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Images Container with Custom Scrollbar */}
            <div
                ref={sliderRef}
                className="flex w-full gap-8 overflow-x-auto px-4 py-6 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100"
            >
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-shrink-0 flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-sm w-[200px]"
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-24 w-24 object-contain"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/96';
                            }}
                        />
                        <span className="text-center text-base font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
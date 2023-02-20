import React, { useState, useEffect } from "react";

const images = [
"photo1.jpeg",
"photo2.jpeg",
"photo3.jpeg",
];

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="relative w-full mx-auto">
            <div className="flex items-center justify-center">
                {/*<button*/}
                {/*    className="text-gray-500 hover:text-gray-700 focus:outline-none"*/}
                {/*    onClick={previousImage}*/}
                {/*>*/}
                {/*    &#8592;*/}
                {/*</button>*/}
                <img
                    src={images[currentImage]}
                    alt=""
                    className="w-full h-96 object-cover"
                />
                {/*<button*/}
                {/*    className="text-gray-500 hover:text-gray-700 focus:outline-none"*/}
                {/*    onClick={nextImage}*/}
                {/*>*/}
                {/*    &#8594;*/}
                {/*</button>*/}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-3 h-3 mx-2 rounded-full ${
                            index === currentImage ? "bg-gray-800" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentImage(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

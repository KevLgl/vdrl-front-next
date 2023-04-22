import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
"/photo1.jpeg",
"/photo2.jpeg",
"/photo3.jpeg",
];

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);;
        }, 4000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="flex items-center justify-center bg-gray-900">
            <div className="relative w-full h-96">
                <Image
                    src={images[currentImage]}
                    alt="carousel images"
                    className="w-full h-full object-cover"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-10 text-center">
                    <p className="text-white font-bold text-5xl">Enssemble, partageons la même passion</p>
                    <p className="text-white mb-6">Le handball, bien plus qu'un sport, une source de bien-être pour le corps et l'esprit.</p>
                    <button type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Programme du week-end
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Carousel;

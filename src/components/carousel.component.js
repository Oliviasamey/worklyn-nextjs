'use client'
import Image from "next/image"
import { useState } from "react";
import { FaBeer } from 'react-icons/fa';

export default function Carousel({ slides }) {

    let [current, setCurrent] = useState(0);
    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1)
    };
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    }

    return (
        <div className="overflow-hidden relative min-h-56">
            <div className={`flex transition ease-out duration-4
        0`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                    <Image
                        src={slide.src} // Image source
                        alt={slide.alt} // Alt text (fallback to slide index)
                        width={slide.width} // Dynamic width
                        height={slide.height} // Dynamic height
                        className="rounded-md" // Add styling if needed
                    />
                ))}
            </div>

            <div className="absolute bottom-0 flex justify-center gap-1 w-full ">
                {slides.map((s, i) => {
                   return <div 
                   onClick={()=>{
                    setCurrent(i);
                   }}
                    key={"circle" + i}
                    className={`rounded-full w-10 h-2 cursor-pointer ${
                        i == current ? "bg-blue-300": "bg-gray-300"}`}></div>
                })}
            </div>

        </div>
    );
}


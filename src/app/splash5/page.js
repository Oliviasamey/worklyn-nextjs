// import Carousel from "@/components/carousel"
"use client"
import React from "react"
import { useSearchParams } from "next/navigation";
import Carousel from "@/components/carousel.component"
import Button from "@/components/button";
import Link from 'next/link';

export default function splash() {
    const searchParams = useSearchParams(); // Extract query parameters
    const name = searchParams.get("name") || "there"; // Default to 'there' if no name is provided

    let slides = [
        {
            src: "/layo.png",
            width: 500,
            height: 300,
            alt: "Layo",
        },
        // {
        //   src: "/Card10.png",
        //   width: 500,
        //   height: 300,
        //   alt: "Card 10",
        // },

    ];

    return (
        <main>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="flex flex-col h-[80%] justify-between items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-center max-w-xl ">
                            Nice to meet you {name}.
                        </h2>
                        <h2 className="text-3xl font-semibold text-center max-w-xl ">
                            Now choose your assistant.
                        </h2>
                    </div>
                    <div className="w-[40%] m-auto">
                        <Carousel slides={slides} />
                    </div>
                    <div className="w-[50%] flex flex-col gap-4">
                        <Link href={`/splash4`} className="w-full flex flex-col gap-4 ">
                            <Button varient="filled"> Continue </Button>
                        </Link>
                        <Button varient="outline"> Take me home </Button>
                    </div>
                </div>

            </div>
        </main>

    )
}
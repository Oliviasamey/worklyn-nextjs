// import Carousel from "@/components/carousel"
import React from "react"
import Image from "next/image"
import Carousel from "@/components/carousel.component"
import Button from "@/components/button";
import Link from 'next/link';

export default function splash() {

  let slides = [
    {
      src: "/Card7.png",
      width: 500,
      height: 300,
      alt: "Card 7",
    },
    {
      src: "/Card10.png",
      width: 500,
      height: 300,
      alt: "Card 10",
    },

  ];

  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col h-[80%] justify-between items-center">
          <div>
            <Image src="/Artboard5.png" alt="Artboard5" width={200} height={200} className="" />
            </div>
          <div>
            <h2 className="text-5xl font-semibold text-center max-w-xl ">
              Hello I am Worklyn, your AI personal assistant
            </h2>
          </div>
          <div className="w-[40%] m-auto">
            <Carousel slides={slides} />
          </div>
          <div className="w-[30%] flex flex-col gap-4">
            <Link href={`/splash4`} className="w-full flex flex-col gap-4 ">
            <Button varient="filled"> Continue </Button>
            </Link>
            <Button varient="outline"> Sign In </Button>
          </div>
        </div>

      </div>
    </main>

  )
}
import Slider from '@/components/Slider';
import Link from 'next/link';
import React from 'react';

import image1 from "/public/image/Celso Pilati -0007.jpg";
import image2 from "/public/image/Celso Pilati -0016.jpg";
import image3 from "/public/image/Celso Pilati -0019.jpg";

import { StaticImageData } from 'next/image';
import Carousel from '@/components/carousel';

export default function Home() {


  const images1: string[] = [
    "./public/image/Celso Pilati -0007.jpg",
    "./public/image/Celso Pilati -0007.jpg",
    "./public/image/Celso Pilati -0016.jpg",
    "./public/image/Celso Pilati -0019.jpg",
  ];

  return (
    <>
    <Slider />
      {/* <Carousel images={images1} timing={4000} className="h-screen w-screen">
        <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1
            className="text-black font-bold font-mono uppercase text-5xl"
            style={{ textShadow: '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)' }}>
            I love simplicity
          </h1>
        </div>
      </Carousel> */}
    </>
  );
}

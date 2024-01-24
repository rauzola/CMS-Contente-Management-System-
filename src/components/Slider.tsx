/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
} from "react-icons/sl";

import image1 from "/public/image/Celso Pilati -0007.jpg";
import image2 from "/public/image/Celso Pilati -0016.jpg";
import image3 from "/public/image/Celso Pilati -0019.jpg";
import image4 from "/public/image/Celso Pilati -0041.jpg";
import Sociais from "./Sociais";

export default function Slider() {
  const images: StaticImageData[] = [image1, image2, image3, image4];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-10 transition-opacity duration-1000">
        <Image
          key={images[currentImageIndex].src}
          src={images[currentImageIndex]}
          layout="fill"
          objectFit="cover"
          alt="Descrição da imagem"
          className="opacity-100 transition-all duration-1000 ease-in-out"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <ul className="mt-8 flex flex-wrap justify-center gap-4">
              <li>
                <Link
                  className="text-white  transition hover:text-white/75 uppercase "
                  href="/projetos"
                >
                  PROJETOS
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75 uppercase"
                  href="/sobre"
                >
                  SOBRE
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75 uppercase"
                  href="/midia"
                >
                  MÍDIA
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75 uppercase"
                  href="/contato"
                >
                  CONTATO
                </Link>
              </li>
            </ul>

            <Sociais />
          </div>
        </div>
      </div>
    </div>
  );
}

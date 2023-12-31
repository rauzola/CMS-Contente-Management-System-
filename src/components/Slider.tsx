/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import image1 from "/public/image/Celso Pilati -0007.jpg";
import image2 from "/public/image/Celso Pilati -0016.jpg";
import image3 from "/public/image/Celso Pilati -0019.jpg";
import image4 from "/public/image/Celso Pilati -0041.jpg";

export default function Slider() {
  // Importa todas as imagens da pasta /public/image/ que têm a extensão .jpg
  const images: StaticImageData[] = [image1, image2, image3, image4];
  const imageKeys = images.keys();

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Alterne a imagem a cada 3 segundos (3000 milissegundos)
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-10 transition-opacity duration-3000">
        <Image
          key={images[currentImageIndex].src} // Use o caminho da imagem como chave
          src={images[currentImageIndex]}
          layout="fill"
          objectFit="cover"
          alt="Descrição da imagem"
          className="duration-1000"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <ul className="mt-8 flex flex-wrap justify-center gap-4">
              <li>
                <Link
                  className="text-white  transition hover:text-white/75 uppercase"
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
          </div>
        </div>
      </div>
    </div>
  );
}

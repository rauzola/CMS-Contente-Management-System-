import Navigation from "@/components/nav";
import React from "react";
import Image, { StaticImageData } from "next/image";

// Importa dinamicamente todas as imagens da pasta image com extensão .jpg
const imageContext = require.context("/public/image", false, /\.jpg$/);
const images: StaticImageData[] = imageContext.keys().map((key: string) => imageContext(key) as StaticImageData);

export default function Projetos() {
  return (
    <>
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-black-100 sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-zinc-400">
            Alguns dos projetos são do trabalho e outros são feitos no meu tempo livre.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={`Projeto ${index + 1}`}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}
              placeholder="blur"
              // blurDataURL={blurDataUrl}
              src={image}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />
          ))}
        </div>
      </div>
    </>
  );
}

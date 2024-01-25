import React from "react";
import Navigation from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import projetosData from "../../projetos.json";

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
          {projetosData.map((projeto) => (
            <div key={projeto.id} className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 overflow-hidden">
              {Object.values(projeto.image).map((imageSrc, index) => (
                <div key={index} className="relative w-full h-48 md:h-64 lg:h-80">
                  <Link href={`projetos/${projeto.id}`} passHref>
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, cursor: 'pointer' }}>
                      <Image
                        src={imageSrc}
                        alt={`Projeto ${projeto.id}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import Navigation from "@/components/nav";
import projetosData from "../../projetos.json";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

// Componente de Esqueleto (Skeleton)
const Skeleton = () => (
  <div className="animate-pulse bg-gray-200 h-96 w-full" />
);

export default function Contato() {
  const router = useRouter();
  const { id } = router.query;
  const [imageLoading, setImageLoading] = useState(true); // Estado para controlar o carregamento da imagem

  // Encontrar o projeto correspondente ao ID
  const projeto = projetosData.find((projeto) => projeto.id === id);

  // Tem que fazer um layout para a página de não encontrado
  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <Head>
        <title>{projeto.name}</title>
      </Head>
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-black-100 sm:text-4xl">
            {projeto.name}
          </h2>
          <p className="mt-4 text-zinc-400">
            Alguns dos projetos são do trabalho e outros são feitos no meu tempo
            livre.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 ">
        {projeto.imagens_slug.map((imagemSlug, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden ${
              index === projeto.imagens_slug.length - 1 ? "mb-24" : ""
            }`}
            style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}
          >
            {imageLoading && <Skeleton />} {/* Mostra o esqueleto enquanto a imagem está sendo carregada */}
            <Image
              layout="responsive"
              objectFit="cover"
              src={imagemSlug}
              alt={`Imagem ${index}`}
              width={500}
              height={300}
              quality={100}
              onLoad={() => setImageLoading(false)} // Atualiza o estado quando a imagem terminar de carregar
            />
          </div>
        ))}
      </div>
    </>
  );
}

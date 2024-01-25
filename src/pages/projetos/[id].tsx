import Navigation from "@/components/nav";
import projetosData from "../../projetos.json";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Contato() {
  const router = useRouter();
  const { id } = router.query;

  // Encontrar o projeto correspondente ao ID
  const projeto = projetosData.find((projeto) => projeto.id === id);

  // Tem que fazer um layout para a página de não encontrado
  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projeto.imagens_slug.map((imagemSlug, index) => (
            <div key={index} className="rounded-lg overflow-hidden ">
              <Image src={imagemSlug} alt={`Imagem ${index}`} width={500} height={300} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

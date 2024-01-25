import Navigation from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import projetosData from "../../projetos.json";

interface Projeto {
  id: string;
  name: string;
  image: string;
  imagens_slug: string[];
}

const projetos: Projeto[] = projetosData;

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
            Alguns dos projetos são do trabalho e outros são feitos no meu tempo
            livre.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {projetos.map((projeto, index) => (
            <div key={projeto.id} className={`grid gap-4 ${index === projetos.length - 1 ? 'mb-24' : ''}`}>
              <div>
                <Link href={`projetos/${projeto.id}`} passHref>
                  <div>
                    <Image
                      src={projeto.image}
                      alt={`Projeto ${projeto.name}`}
                      layout="responsive"
                      width={400}
                      height={300}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

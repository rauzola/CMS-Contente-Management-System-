// pages/bio.tsx
import { GetStaticProps } from "next";
import { GraphQLClient } from "graphql-request";
import { AssetPageProps } from "@/components/Bio/types";
import { Asset } from "@/types/page-info";
import BioComponents from "@/components/Bio";
import { GET_ASSETS } from "@/components/Bio/graphql";
import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  Github,
  Instagram,
  Linkedin,
  MonitorSmartphone,
  User2,
} from "lucide-react";

export default function AssetPage({ data }: AssetPageProps) {
  return (
    <div>
      {data.map(({ id, fileName, createdAt, publishedAt, url, updatedAt }) => (
        <div key={id}>
          <div>
            <div className="w-full text-center flex items-center justify-center mt-8">
              <header>
                <Image
                  className=" object-cover rounded-full border-2 border-purple-600 p-1 mx-auto"
                  src={url}
                  alt="Minha foto de perfil"
                  width={150}
                  height={150}
                  quality={100}
                />

                <h1 className="text-zinc-100 text-center font-semibold text-2xl mt-7">
                  {fileName}
                </h1>

                <p className="font-normal italic text-sm text-center text-zinc-300 m-2">
                  Seja bem-vindo(a)
                </p>
              </header>
            </div>

            <div className="flex items-center justify-center w-full">
              <main>
                <ul className="m-2">
                  {/* 1° */}
                  <Link
                    href="https://instagram.com/raul_sigoli"
                    target="_blank"
                  >
                    <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70">
                      <Instagram />
                      Instagram
                    </li>
                  </Link>
                  {/* 2° */}
                  <Link href="https://github.com/rauzola" target="_blank">
                    <li className="bg-purple-600 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70">
                      <Github />
                      Github
                    </li>
                  </Link>
                </ul>
              </main>
            </div>
            <footer className="w-full text-center text-xs m-4 text-zinc-300">
              <Link href="https://github.com/rauzola" target="_blank">
                ©Copyright 2024 - Todos os direitos reservados
              </Link>
            </footer>
          </div>
          {/* <BioComponents
            fileName={fileName}
            createdAt={createdAt}
            publishedAt={publishedAt}
            updatedAt={updatedAt}
            url={url}
            assets={undefined}
            id={''}
          /> */}
          <br />
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<AssetPageProps> = async () => {
  const hygraph = new GraphQLClient(process.env.HYGRAPH_URL as string);

  try {
    const data: { assets: Asset[] } = await hygraph.request(GET_ASSETS);

    return {
      props: {
        data: data.assets,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

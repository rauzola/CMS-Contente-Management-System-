import projetosData from "../../projetos.json";
import { useRouter } from 'next/router';

export default function Contato() {
  const router = useRouter();
  const { id } = router.query;

  // Encontrar o projeto correspondente ao ID
  const projeto = projetosData.find((projeto) => projeto.id === id);

  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div>
      <h1>{projeto.name}</h1>
      <p>ID: {projeto.id}</p>
      <p>Image: {projeto.image}</p>
      <p>Imagens Slug: {projeto.imagens_slug.join(", ")}</p>
    </div>
  );
}

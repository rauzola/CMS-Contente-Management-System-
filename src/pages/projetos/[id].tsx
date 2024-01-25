import React from "react";

export default function Contato(props: { params: { id: string } }) {
  const { params } = props;
  
  return (
    <>
      <h1>noticiaaaa {params.id}</h1>
    </>
  );
}

// Esta função é executada no servidor para gerar a página
export async function getServerSideProps(context: any) {
  const { params } = context;
  
  // Pode fazer algumas lógicas aqui se necessário

  return {
    props: {
      params,
    },
  };
}

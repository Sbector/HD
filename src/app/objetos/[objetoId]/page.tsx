import { Metadata } from "next";

type Props = {
  params: {
    objetoId: string;
  };
};

// Función generateMetadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(params.objetoId); // Simula un título dinámico
    }, 100);
  });

  return {
    title: `Objeto ${title}`,
  };
};

// Componente principal
export default async function ObjetoDetails({ params }: Props) {
  // Asegúrate de que params.objetoId esté disponible antes de renderizar
  const objetoId = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(params.objetoId);
    }, 100);
  });

  return (
    <>
      <h1>Detalles sobre objeto {objetoId}</h1>
    </>
  );
}

import React from "react";
import Title from "../title/Title";

const NoticiaWrapper = () => {
  const noticias = [
    {
      noticia:
        "Retiro de jovens será realizado no último fim de semana de Abril/2025.",
      data: "02/04/2025",
      hora: "18:00",
      expirar: true,
    },
    {
      noticia:
        "Grupo de oração ministrará o Cerco de Jericó durante todo o mês de Abril/2025.",
      data: "13/04/2025",
      hora: "19:30",
      expirar: true,
    },
    {
      noticia: "Nova missa marcada para o dia 23 de Abril 2025.",
      data: "15/04/2025",
      hora: "10:00",
      expirar: true,
    },
    {
      noticia:
        "Aula de catequese começa no dia 20 de Maio de 2025. Façam as inscrições de suas crianças.",
      data: "20/04/2025",
      hora: "14:00",
      expirar: false,
    },
  ];

  return (
    <div className=" p-2 bg-emerald-800 ">
      <Title>Últimas notícias</Title>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mx-45 xl:mx-75 2xl:mx-120 my-2">
        {noticias.map((noticia, index) => (
          <li key={index} className=" bg-emerald-700 border rounded-md p-1.5 ">
            <article className="flex flex-col h-full justify-between">
              <p>{noticia.noticia}</p>
              <p className="text-xs text-end mt-5 ">
                Criado em: {noticia.data} às {noticia.hora}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticiaWrapper;

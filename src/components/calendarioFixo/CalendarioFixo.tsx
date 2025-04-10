import React from "react";
import Title from "../title/Title";

const CalendarioFixo = () => {
  const programacaoAgrupada = {
    Domingo: [
      {
        evento: "Missa Dominical",
        hora: "08:00",
        dia: "1",
        diaSemana: "Domingo",
      },
    ],
    "Terça-feira": [
      {
        evento: "Terço dos homens",
        hora: "19:30",
        dia: "3",
        diaSemana: "Terça-feira",
      },
    ],
    "Quinta-feira": [
      {
        evento: "Adoração",
        hora: "18:30",
        dia: "5",
        diaSemana: "Quinta-feira",
      },
      {
        evento: "Grupo de Oração",
        hora: "20:30",
        dia: "5",
        diaSemana: "Quinta-feira",
      },
    ],
    Sábado: [
      {
        evento: "Catequese",
        hora: "09:00",
        dia: "7",
        diaSemana: "Sábado",
      },
      {
        evento: "Grupo de Jovens",
        hora: "16:00",
        dia: "7",
        diaSemana: "Sábado",
      },
    ],
  };

  return (
    <div className="p-2 bg-emerald-800 ">
      <Title>Calendário Semanal</Title>
      <dl className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs lg:mx-45 xl:mx-75 2xl:mx-120">
        {Object.entries(programacaoAgrupada).map(([diaSemana, eventos]) => (
          <div key={diaSemana} className="mb-6 flex flex-col items-center">
            <h3 className="text-xl border rounded-md p-1 w-full text-center font-semibold mb-2">
              {diaSemana}
            </h3>
            <ul className="ml-4 flex flex-col gap-5 text-center my-2">
              {eventos.map((evento, index) => (
                <li key={index} className="text-xl">
                  {evento.evento} às {evento.hora}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CalendarioFixo;

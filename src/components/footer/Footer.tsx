"use client";
import React from "react";
import Title from "../title/Title";
import Maps from "../maps/Maps";
import { MapProvider } from "@/providers/MapProvider";

const Footer = () => {
  return (
    <footer className="p-2 border-t py-2">
      <Title>Faça-nos uma visita!</Title>
      <p className="text-base text-center mt-2">
        Avenida das Oliveiras, 1855 - Conj. Panorama - Potengi, Natal - RN
      </p>
      <div className="md:w-1/2 flex justify-center mx-auto mt-2">
        <MapProvider>
          <Maps />
        </MapProvider>
      </div>
    </footer>
  );
};

export default Footer;

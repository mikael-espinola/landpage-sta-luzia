import React from "react";
import LinkButton from "../linkButton/LinkButton";
import Image from "next/image";
import { SlLogin } from "react-icons/sl";

const Header = () => {
  return (
    <header className="relative p-2 border-b w-full">
      <div className="md:absolute left-0 right-0 flex justify-between items-center md:px-15 lg:px-45 xl:px-80 2xl:px-150">
        <div className="relative w-12 h-12 md:mb-2 ">
          <Image alt="" src="/staluzia.png" fill className="rounded-md" />
        </div>

        <LinkButton href="/login" text="Login" icon={SlLogin} />
      </div>
      <h1 className="text-4xl text-center ">Comunidade de Santa Luzia</h1>
      <p className="text-center text-xs py-1">Natal, RN</p>

      <p className="text-center italic text-xs mt-4">
        Santa Luzia, que preferiste deixar que teus olhos fossem arrancados a
        negar a fé, e foste recompensada por Deus com a cura e novos olhos, roga
        por nós.
      </p>
    </header>
  );
};

export default Header;

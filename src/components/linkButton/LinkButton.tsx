import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ILinkButton {
  text: string;
  href: string;
  icon?: IconType;
}

const LinkButton = ({ text, href, icon: Icon }: ILinkButton) => {
  return (
    <Link
      href={href}
      className="border rounded-md outline-offset-6 outline-white p-1"
    >
      {Icon ? <Icon className="text-2xl text-white" /> : text}
    </Link>
  );
};

export default LinkButton;

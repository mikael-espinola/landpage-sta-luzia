import React from "react";

interface ITitle {
  children: React.ReactNode;
}

const Title = ({ children }: ITitle) => {
  return <h4 className="text-center text-2xl">{children}</h4>;
};

export default Title;

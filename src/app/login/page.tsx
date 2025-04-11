import LoginForm from "@/components/form/LoginForm";
import LinkButton from "@/components/linkButton/LinkButton";
import React from "react";

const page = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center ">
      <div className="flex w-full">
        <LinkButton text="Voltar" href="/" />
      </div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default page;

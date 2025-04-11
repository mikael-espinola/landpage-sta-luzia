"use client";
import React from "react";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log({ email, password });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 flex flex-col items-center w-full "
    >
      <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/6">
        <label htmlFor="email">Usuário</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="outline-0  p-2 rounded-md border"
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="outline-0  p-2 rounded-md border"
        />
      </div>
      <button
        type="submit"
        className=" w-full md:w-1/2 lg:w-1/6 bg-emerald-800 text-white p-2 rounded-md mt-4 cursor-pointer"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;

import React from "react";

const RegisterForm: React.FC = () => {
  return (
    <form className="space-y-4 bg-gray-800 p-6 rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Cadastro</h2>
      <input
        type="text"
        placeholder="Nome"
        className="w-full p-2 rounded bg-gray-100 text-black"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 rounded bg-gray-100 text-black"
      />
      <input
        type="password"
        placeholder="Senha"
        className="w-full p-2 rounded bg-gray-100 text-black"
      />
      <button type="submit" className="bg-white text-black px-4 py-2 rounded font-semibold w-full">
        Cadastrar
      </button>
    </form>
  );
};

export default RegisterForm;

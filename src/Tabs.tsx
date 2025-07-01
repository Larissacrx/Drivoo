import React, { useState } from "react";
import UberRequest from "./components/UberRequest";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"request" | "login" | "register">("request");

  const isActive = (tab: string) => activeTab === tab;

  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Botões de navegação */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("request")}
            className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
              isActive("request") ? "bg-white text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Solicitar Corrida
          </button>
          <button
            onClick={() => setActiveTab("login")}
            className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
              isActive("login") ? "bg-white text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
              isActive("register") ? "bg-white text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Cadastro
          </button>
        </div>

        {/* Conteúdo das abas */}
        <div className="transition-all duration-300">
          {activeTab === "request" && <UberRequest />}
          {activeTab === "login" && <LoginForm />}
          {activeTab === "register" && <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;

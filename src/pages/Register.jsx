import React from "react";
import { useState, useEffect } from "react";

export default function Register() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl">Registre-se para publicar</h1>
      <p className="bg-white ">Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuario!"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            required
            placeholder="E-mail do usuario!"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira uma senha!"
          />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confime sua senha!"
          />
        </label>
        <button
          className="bg-[#1a8918] text-white text-center cursor-pointer w-[120px] font-[bold] text-[1em] px-[15px] py-2.5 rounded-[10px] hover:bg-[#0f730c]
}"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

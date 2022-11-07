import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { useAuth } from "../contexts/AuthContext";

import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

import logo from "../assets/icons/logo.svg";
import image from "../assets/images/loginImage.svg";

export function LoginPage() {
  const { authenticate, logout } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    logout();
  }, []);

  function isFormDataValid() {
    setUsername(username.trim());
    setPassword(password.trim());
    return username && password;
  }

  async function login() {
    if (isFormDataValid()) {
      const user = {
        Username: username,
        Password: password,
        Type: undefined,
        FkPessoa: null,
      };

      if (await authenticate(user)) {
        switch (sessionStorage.getItem("type")) {
          case "0":
            navigate("/");
            break;
          case "1":
            navigate("/avaliacoes");
            break;
        }
      }
    }
  }

  return (
    <div
      className="
        flex
        items-center
        justify-center

        sm:items-center
        sm:justify-center

        md:items-stretch
        md:justify-start

        lg:items-stretch
        lg:justify-start

        flex-1
        h-screen
        md:bg-gradient-to-br
        from-[#996DFF]
        to-[#6342b3]
      "
    >
      <form
        className="
          flex
          h-full
          w-full

          flex-1
          md:flex-none

          flex-col
          justify-center

          p-[5%]
          md:p-10
          md:w-2/5

          bg-[#2b292e]

          rounded-none

          shadow-none
          md:shadow-2xl
        "
      >
        <img
          src={logo}
          alt="logo let me rate"
          className="self-center mb-16 w-[30%]"
        />
        <h1
          className="
            self-center
            text-center text-[#F5F5F5] text-4xl
            font-extrabold mb-10
          "
        >
          Faça login
        </h1>

        <Input
          state={{ getter: username, setter: setUsername }}
          type="text"
          labelFor="Usuário"
          icon={<BsFillPersonFill className="text-[#F5F5F5]/50 text-lg" />}
        />
        <Input
          state={{ getter: password, setter: setPassword }}
          type="password"
          labelFor="Senha"
          icon={<HiLockClosed className="text-[#F5F5F5]/50 text-lg" />}
        />

        <Button onClick={login} className="mt-20">
          Entrar
        </Button>
      </form>

      <aside className="hidden md:flex flex-1 flex-col justify-center gap-5 p-10">
        <img
          src={image}
          alt="Ilustração de alunos"
          className="self-center h-[80%]"
        />
        <p className="self-end text-right text-2xl max-w-[500px] text-white font-semibold">
          Ajude a construir um ambiente de ensino cada vez melhor
        </p>
      </aside>
    </div>
  );
}

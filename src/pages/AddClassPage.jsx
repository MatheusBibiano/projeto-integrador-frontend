import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useClasses } from "../contexts/ClassesContext";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

import { IoArrowBack } from "react-icons/io5";

export function AddClassPage() {
  const navigate = useNavigate();
  const { isLogged, logout } = useAuth();
  const { handleAddClass } = useClasses();
  const [theme, setTheme] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/login");
    }
  }, [isLogged]);

  function isFormDataValid() {
    setTheme(theme.trim());
    setDate(date.trim());
    return theme && date;
  }

  function createNewClass() {
    if (isFormDataValid()) {
      const newClass = {
        Tema: theme,
        DataMinistrada: date,
        FkDisc: sessionStorage.getItem("discId"),
      };

      console.log(newClass);

      handleAddClass(newClass);
    }
  }

  return (
    <div className="flex flex-col w-full h-full mt-[100px]">
      <header
        className="
          fixed top-0 z-50
          flex justify-center items-center
          py-4
          bg-[#201f22]/80
          border-b-2 border-[#151416]/30
          w-full
          backdrop-blur-md
        "
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#FEFEFE] max-w-fit">
          {sessionStorage.getItem("discNome")}
        </h1>
      </header>

      <form className="flex flex-col gap-10 w-full h-full px-10 pt-8 max-w-xl self-center">
        <header className="flex flex-col items-center gap-1">
          <h2 className="text-[#FEFEFE] text-3xl text-center">
            Adicione uma aula
          </h2>
          <span className="text-[#FEFEFE]/60 text-lg text-center">
            Crie uma aula para ser avaliada por seus alunos
          </span>
        </header>

        <div className="flex flex-col">
          <Input
            labelFor="Tema"
            type="text"
            state={{ getter: theme, setter: setTheme }}
          />

          <Input
            labelFor="Ministrada"
            type="date"
            state={{ getter: date, setter: setDate }}
          />
        </div>

        <Button type="submit" onClick={createNewClass}>
          Criar
        </Button>
      </form>

      <button
        className="
            flex items-center justify-center
            w-12
            h-12
            p-2
            bg-[#FEFEFE]/10
            md:bg-transparent
            md:hover:bg-[#FEFEFE]/10
            rounded-lg
            group
            fixed left-5 bottom-0 md:top-[18px]
            z-50
        "
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoArrowBack className="text-[#a27df8] text-3xl text-center md:text-[#FEFEFE]/80 md:group-hover:text-[#a27df8]" />
      </button>
    </div>
  );
}

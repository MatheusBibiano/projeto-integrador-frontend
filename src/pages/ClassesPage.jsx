import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Loading } from "../components/Loading/Loading";
import { Class } from "../components/Class/Class";
import { Button } from "../components/Button/Button";
import { useAuth } from "../contexts/AuthContext";
import { useClasses } from "../contexts/ClassesContext";

import { MdOutlineAddBox } from "react-icons/md";

import noClasses from "../assets/icons/noRatings.svg";

export function ClassesPage() {
  const { isLogged, logout } = useAuth();
  const { data } = useClasses();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/login");
    }
  }, [isLogged]);

  const rows = data?.map((current) => (
    <Class key={current.idAula} data={current} />
  ));

  return (
    <div
      className="
        flex flex-col
        h-full w-full
        mt-[100px]
      "
    >
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

      <article
        className="
          flex flex-1 flex-col
          px-4
          w-full
          md:px-10
          mb-10
        "
      >
        <header className="flex items-center justify-between mb-5 w-full">
          <div className="flex items-center">
            <h2 className="text-lg font-bold mr-2 text-[#F5F5F5] max-w-fit">
              Aulas
            </h2>
            <span
              className="
            flex items-center justify-center
            bg-[#8257E5]
            rounded-full
            py-1 px-[11px]
            text-[#F8F8F8]
            font-bold
            h-8
            max-w-fit
          "
            >
              {!data ? <Loading style="text-white" /> : data?.length}
            </span>
          </div>
          <Button className="flex items-center gap-1 px-2 py-2 font-semibold max-w-fit">
            Criar
            <MdOutlineAddBox className="text-[#FEFEFE] text-2xl" />
          </Button>
        </header>

        {!data?.length ? (
          <div className="flex flex-col items-center justify-center mt-[15vh]">
            <img
              src={noClasses}
              alt="Balões de avaliação"
              className="w-[200px]"
            />
            <h2 className="font-semibold mt-4 text-lg text-center text-[#F5F5F5]">
              Nenhuma aula encontrada
            </h2>
          </div>
        ) : (
          <ul
            className="
              flex
              flex-col
              w-full
              md:w-auto
              md:px-0
              md:flex-row
              md:flex-wrap
              justify-center
              md:justify-start
              gap-4
            "
          >
            {rows}
          </ul>
        )}
      </article>

      <Navbar />
    </div>
  );
}

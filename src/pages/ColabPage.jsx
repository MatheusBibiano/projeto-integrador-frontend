import { useEffect } from "react";
import { Rating } from "../components/Rating/Rating";
import { Loading } from "../components/Loading/Loading";
import { useRatings } from "../contexts/RatingsContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useColab } from "../contexts/ColabContext";

import noRatings from "../assets/icons/noRatings.svg";

export function ColabPage() {
  const { data } = useRatings();
  const { isLogged, logout } = useAuth();
  const { fkPerson, getDashboardColabData } = useColab();
  const navigate = useNavigate();

  useEffect(() => {
    getDashboardColabData(fkPerson);
  }, []);

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/login");
    }
  }, [isLogged]);

  const rows = data?.map((rating) => (
    <Rating key={rating.idAval} data={rating} />
  ));

  return (
    <div
      className="
        flex flex-col
        h-full w-full
        mt-[90px]
        md:mt-0
        md:py-5 md:px-10
      "
    >
      <header
        className="
          fixed top-0 z-50
          md:static
          md:z-auto
          flex justify-center items-center
          py-4
          md:py-0
          bg-[#F5F5F5]
          border-b-2 border-[#E4DCF5]
          w-full
          md:border-none
          md:justify-start
          md:mx-10
        "
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#29292E]">
          {sessionStorage.getItem("discNome")}
        </h1>
      </header>

      <hr className="hidden md:block border border-[#E4DCF5] bg-[#E4DCF5] my-5" />

      <article
        className="
          flex flex-1 flex-col
          px-4
          md:px-10
        "
      >
        <header className="flex items-center mb-5">
          <h2 className="text-lg font-bold mr-2">Recentes</h2>
          <span
            className="
            flex items-center justify-center
            bg-[#8257E5]
            rounded-full
            py-1 px-[11px]
            text-[#F8F8F8]
            font-bold
            h-8
          "
          >
            {!data ? <Loading style="text-white" /> : data?.length}
          </span>
        </header>

        {!data?.length ? (
          <div className="flex flex-col items-center justify-center mt-[15vh]">
            <img src={noRatings} alt="Balões de avaliação" />
            <h2 className="font-semibold mt-4 text-lg text-[#29292E]">
              Nenhuma avaliação encontrada
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
    </div>
  );
}

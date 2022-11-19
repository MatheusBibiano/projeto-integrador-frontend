import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { BackButton } from "../components/BackButton/BackButton";
import { RatingTag } from "../components/RatingTag/RatingTag";
import { convertQuality } from "../scripts/convertQuality";
import { dateTimeToDate } from "../scripts/convertDateTimeToDate";
import { ColabHeader } from "../components/ColabHeader/ColabHeader";

export function RatingPage() {
  const { state } = useLocation();
  const { isLogged, logout } = useAuth();
  const navigate = useNavigate();
  const [content, type] = convertQuality(state.qualidade);

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/login");
    }
  }, [isLogged]);

  return (
    <div className="flex flex-col w-full h-full mt-[100px]">
      <ColabHeader
        discName={sessionStorage.getItem("discNome")}
        personName={`${sessionStorage.getItem(
          "colabName"
        )} ${sessionStorage.getItem("colabSobrenome")}`}
        hasBackButton={true}
      />

      <ul className="flex flex-col gap-4">
        <li className="text-[#FEFEFE]">{state.tema}</li>
        <li className="flex flex-col">
          <RatingTag type={type}>{content}</RatingTag>
        </li>
        {state.mensagem && <li className="text-[#FEFEFE]">{state.mensagem}</li>}
        <li className="text-[#FEFEFE]">{dateTimeToDate(state.dataPostagem)}</li>
      </ul>

      <BackButton />
    </div>
  );
}

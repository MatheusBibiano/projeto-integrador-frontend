import { useEffect } from "react";
import { ColabHeader } from "../components/ColabHeader/ColabHeader";
import { BackButton } from "../components/BackButton/BackButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { dateTimeToDate } from "../scripts/convertDateTimeToDate";

export function ClassPage() {
  const { state } = useLocation();
  const { isLogged, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      logout();
      navigate("/login");
    }
  }, [isLogged]);

  return (
    <div className="flex flex-col w-full h-full mt-[100px]">
      <ColabHeader />

      <ul className="flex flex-col gap-4">
        <li className="text-[#FEFEFE]">{state.tema}</li>
        <li className="text-[#FEFEFE]">
          {dateTimeToDate(state.dataMinistrada)}
        </li>
      </ul>

      <BackButton />
    </div>
  );
}

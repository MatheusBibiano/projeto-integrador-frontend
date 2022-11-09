import { useLocation } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";
import { RatingTag } from "../components/RatingTag/RatingTag";
import { convertQuality } from "../scripts/convertQuality";
import { dateTimeToDate } from "../scripts/convertDateTimeToDate";
import { ColabHeader } from "../components/ColabHeader/ColabHeader";

export function RatingPage() {
  const { state } = useLocation();
  const [content, type] = convertQuality(state.qualidade);

  return (
    <div className="flex flex-col w-full h-full mt-[100px]">
      <ColabHeader />

      <ul className="flex flex-col gap-4">
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

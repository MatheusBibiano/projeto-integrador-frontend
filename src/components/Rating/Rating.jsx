import { RatingTag } from "../RatingTag/RatingTag";
import { useRatings } from "../../contexts/RatingsContext";
import { convertQuality } from "../../scripts/convertQuality";

import { RiQuestionAnswerLine } from "react-icons/ri";
import { FiTrash } from "react-icons/fi";

export function Rating({ data }) {
  const [content, type] = convertQuality(data.qualidade);
  const { handleRemoveRating } = useRatings();

  return (
    <div
      className="
      relative
      flex
      flex-col
      self-end
      gap-4
      justify-between
      p-5
      bg-white
      shadow-lg
      rounded-lg
      w-full
      h-fit
      md:w-fit
      md:max-w-[45%]
    "
    >
      <header
        className={`
            flex gap-3
            ${data.mensagem && "items-center"}
            ${!data.mensagem && "flex-col"}
        `}
      >
        <h2 className="font-semibold text-base truncate">
          Introdução a jQuery
        </h2>
      </header>

      {data.mensagem && (
        <p className="text-#29292E] truncate">{data.mensagem}</p>
      )}

      <footer
        className="
          flex
          justify-end
          md:justify-start
          items-center
          gap-4
        "
      >
        <RatingTag type={type}>{content}</RatingTag>
        <div className="flex justify-end gap-4 w-full">
          <button title="Responder" className="mt-1 outline-[#996DFF]">
            <RiQuestionAnswerLine
              className="
              text-[#737380]
              hover:text-[#8257E5]
            "
              size={24}
            />
          </button>
          <button
            className="outline-[#996DFF]"
            title="Excluir"
            onClick={() => {
              handleRemoveRating(data);
            }}
          >
            <FiTrash
              className="
              text-[#737380]
              hover:text-red-400
            "
              size={24}
            />
          </button>
        </div>
      </footer>
    </div>
  );
}

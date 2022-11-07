import { dateTimeToDate } from "../../scripts/convertDateTimeToDate";

import { HiOutlineCalendar } from "react-icons/hi";
import { BiShareAlt } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";

export function Class({ data }) {
  return (
    <div className="flex p-4 bg-[#201f22] justify-between gap-6 rounded-lg shadow-md">
      <div className="flex flex-col items-start">
        <h2 className="text-xl text-[#FEFEFE]">{data.tema}</h2>
        <div className="flex items-center gap-2">
          <HiOutlineCalendar className="text-lg text-[#FEFEFE]/60" />
          <span className="text-base text-[#FEFEFE]/60">
            {dateTimeToDate(data.dataMinistrada)}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          title="Abrir aula"
          className="flex items-center justify-center group p-3 rounded-lg hover:bg-[#FEFEFE]/10"
        >
          <IoLogInOutline className="text-[#FEFEFE]/80 text-2xl group-hover:text-[#996DFF]" />
        </button>
        <button
          title="Compartilhar link"
          className="flex items-center justify-center group p-3 rounded-lg hover:bg-[#FEFEFE]/10"
        >
          <BiShareAlt className="text-[#FEFEFE]/80 text-2xl group-hover:text-[#996DFF]" />
        </button>
      </div>
    </div>
  );
}

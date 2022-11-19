import { BsPerson } from "react-icons/bs";

export function ColabHeader({ discName, personName, hasBackButton }) {
  return (
    <header
      className={`
          fixed top-0 z-50
          flex justify-between items-center
          py-4 px-10
          bg-[#201f22]/80
          border-b-2 border-[#151416]/30
          w-full
          backdrop-blur-md
          ${hasBackButton && "pl-24"}
        `}
    >
      <h1 className="text-3xl md:text-5xl text-[#FEFEFE] max-w-fit">
        {discName}
      </h1>
      <div className="flex items-center gap-2">
        <span className="text-[#FEFEFE]/80 text-lg">{personName}</span>
        <div className="flex items-center justify-center p-2 bg-[#FEFEFE]/80 rounded-full">
          <BsPerson size={24} />
        </div>
      </div>
    </header>
  );
}

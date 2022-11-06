import { useAuth } from "../../contexts/AuthContext";

import { SiGoogleclassroom } from "react-icons/si";
import { TbStars } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";

export function Navbar() {
  const { logout } = useAuth();

  return (
    <div
      className="
            flex items-center justify-center 
            fixed bottom-10
            w-full
        "
    >
      <nav
        className="
            flex items-center justify-center 
            bg-[#201f22]/80
            border-2 border-[#151416]/20
            p-1
            rounded-2xl
            backdrop-blur-sm
        "
      >
        <ul className="flex items-center">
          <li>
            <button className="flex flex-col items-center group hover:bg-[#FEFEFE]/10 rounded-xl px-6 py-2">
              <TbStars className="text-3xl text-[#FEFEFE]/80 group-hover:text-[#996DFF]" />
              <span className="text-lg text-[#FEFEFE]/80">Avaliações</span>
            </button>
          </li>
          <li>
            <button className="flex flex-col items-center group hover:bg-[#FEFEFE]/10 rounded-xl px-6 py-2">
              <SiGoogleclassroom className="text-3xl text-[#FEFEFE]/80 group-hover:text-[#996DFF]" />
              <span className="text-lg text-[#FEFEFE]/80">Aulas</span>
            </button>
          </li>
          <li>
            <button
              className="flex flex-col items-center group hover:bg-[#FEFEFE]/10 rounded-xl px-6 py-2"
              onClick={() => {
                logout();
              }}
            >
              <IoLogOutOutline className="text-3xl text-[#FEFEFE]/80 group-hover:text-[#996DFF]" />
              <span className="text-lg text-[#FEFEFE]/80">Sair</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

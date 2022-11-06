import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { SiGoogleclassroom } from "react-icons/si";
import { TbStars } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";

export function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div
      className="
            flex items-center justify-center 
            fixed bottom-4
            md:bottom-10
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
            backdrop-blur-md
        "
      >
        <ul className="flex items-center">
          <li>
            <button
              className="flex flex-col items-center group hover:bg-[#FEFEFE]/10 rounded-xl py-2 w-24"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <TbStars className="text-3xl text-[#FEFEFE]/80 group-hover:text-[#FFC300]" />
              <span className="text-sm text-[#FEFEFE]/80 group-hover:text-[#F5F1DC]">
                Avaliações
              </span>
            </button>
          </li>
          <li>
            <button
              className="flex flex-col items-center group hover:bg-[#FEFEFE]/10 rounded-xl py-2 w-24"
              onClick={() => {
                navigate("/classes");
              }}
            >
              <SiGoogleclassroom className="text-3xl text-[#FEFEFE]/80 group-hover:text-[#44a85d]" />
              <span className="text-sm text-[#FEFEFE]/80 group-hover:text-[#C6ECCC]">
                Aulas
              </span>
            </button>
          </li>
          <li>
            <button
              className="flex flex-col items-center group hover:bg-[#FEFEFE]/10 rounded-xl py-2 w-24"
              onClick={() => {
                logout();
              }}
            >
              <IoLogOutOutline className="text-3xl text-[#FEFEFE]/80 group-hover:text-[#fa5268] ml-2" />
              <span className="text-sm text-[#FEFEFE]/80 group-hover:text-[#F6DBDB]">
                Sair
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

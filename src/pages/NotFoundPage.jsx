import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F5F5F5]">
      <h2 className="flex items-center text-[#29292E] text-3xl font-bold">
        <FiAlertTriangle className="text-4xl mr-1" />
        Página não encontrada!
      </h2>
      <Link
        to="/"
        className="text-[#3e3e46] hover:underline hover:text-[#8257E5]"
      >
        Ir para o início
      </Link>
    </div>
  );
}

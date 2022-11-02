import { HiCheckCircle } from "react-icons/hi";
import { IoIosWarning, IoIosCloseCircle } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";

export function Snack({ title, message, type = "success", pos = "top-right" }) {
  var theme, icon, position;

  function setType() {
    switch (type) {
      case "success":
        theme = `
          border-emerald-600
          bg-emerald-300
        `;
        icon = <HiCheckCircle className="text-4xl text-emerald-600" />;
        break;
      case "info":
        theme = `
          border-indigo-600
          bg-indigo-300
        `;
        icon = <AiFillInfoCircle className="text-4xl text-indigo-600" />;
        break;
      case "warning":
        theme = `
          border-amber-600
          bg-amber-300
        `;
        icon = <IoIosWarning className="text-4xl text-amber-600" />;
        break;
      case "error":
        theme = `
          border-red-600
          bg-red-300
        `;
        icon = <IoIosCloseCircle className="text-4xl text-red-600" />;
        break;
    }
  }

  function setPos() {
    switch (pos) {
      case "top-right":
        position = `
          top-4
          right-4
        `;
        break;
      case "top-left":
        position = `
            top-4
            left-4
          `;
        break;
      case "bottom-right":
        position = `
          bottom-4
          right-4
        `;
        break;
      case "bottom-left":
        position = `
          bottom-4
          left-4
        `;
        break;
    }
  }

  setType();
  setPos();

  return (
    <div
      id="container"
      className={`
        fixed
        flex items-center gap-4
        rounded-lg
        shadow-lg
        px-4 py-2
        z-[99]
        border-2
        border-transparent
        max-w-xs
        ${theme}
        ${position}
      `}
    >
      <div className="flex items-center justify-center min-w-fit">{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{title}</span>
        <p className="">{message}</p>
      </div>
    </div>
  );
}

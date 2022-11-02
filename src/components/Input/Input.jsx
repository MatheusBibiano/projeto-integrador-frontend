import { removeAccents } from "../../scripts/removeAccents";
import styles from "./Input.module.css";

export function Input({ type, labelFor, icon, state }) {
  return (
    <div className="flex flex-col mb-8">
      <label
        htmlFor={removeAccents(labelFor)}
        className="text-lg text-[#29292E] ml-2"
      >
        {labelFor}
      </label>
      <div
        className="
          flex items-center
          bg-[#F5F5F5]
          border-2 border-[#A1A1AA]
          rounded-lg
          focus-within:border-[#8257E5]
        "
      >
        <input
          type={type}
          id={removeAccents(labelFor)}
          className="
            flex-1
            h-full
            pl-2
            border-none
            text-lg text-[#29292E]
            outline-none
            rounded-lg
            bg-transparent
          "
          value={state.getter}
          onChange={(event) => {
            state.setter(event.target.value);
          }}
          autoComplete="off"
          maxLength={32}
        />
        <div className="flex items-center justify-center p-3">{icon}</div>
      </div>
    </div>
  );
}

import { removeAccents } from "../../scripts/removeAccents";

export function Input({ type, labelFor, icon, state }) {
  return (
    <div className="flex flex-col mb-8">
      <label
        htmlFor={removeAccents(labelFor)}
        className="text-lg text-[#F5F5F5] ml-2"
      >
        {labelFor}
      </label>
      <div
        className="
          flex items-center
          bg-trasparent
          border-2 border-[#F5F5F5]/50
          rounded-lg
          focus-within:border-[#8257E5]
        "
      >
        <input
          type={type}
          id={removeAccents(labelFor)}
          className="
            flex-1
            w-full
            h-full
            pl-2
            border-none
            text-lg text-[#F5F5F5]
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
        <div className="flex items-center justify-center p-3 max-w-fit">{icon}</div>
      </div>
    </div>
  );
}

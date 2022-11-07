import { createContext, useContext } from "react";
import { useAxios } from "../hooks/useAxios";

const ClassesContext = createContext();

export function ClassesContextProvider({ children }) {
  const { data, mutate } = useAxios(
    `Aula/Listar/${sessionStorage.getItem("discId")}`
  );

  return (
    <ClassesContext.Provider value={{ data }}>
      {children}
    </ClassesContext.Provider>
  );
}

export function useClasses() {
  return useContext(ClassesContext);
}

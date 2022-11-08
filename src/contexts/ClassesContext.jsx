import { createContext, useContext } from "react";
import { useAxios } from "../hooks/useAxios";
import { axiosAPI } from "../services/axios";

const ClassesContext = createContext();

export function ClassesContextProvider({ children }) {
  const { data, mutate } = useAxios(
    `Aula/Listar/${sessionStorage.getItem("discId")}`
  );

  // POST
  function handleAddClass(newClass) {
    axiosAPI.post("/Aula/NovaAula", newClass);
    mutate([...data, newClass], false);
  }

  return (
    <ClassesContext.Provider value={{ data, handleAddClass }}>
      {children}
    </ClassesContext.Provider>
  );
}

export function useClasses() {
  return useContext(ClassesContext);
}

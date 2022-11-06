import { createContext, useContext, useState } from "react";
import { axiosAPI } from "../services/axios";

const ColabContext = createContext();

export function ColabContextProvider({ children }) {
  const [fkPerson, setFkPerson] = useState(sessionStorage.getItem("fkPessoa"));
  const [colabData, setColabData] = useState();

  async function handleGetDashboardColabData(personId) {
    if (personId) {
      const res = await axiosAPI.get(
        `Colaborador/GetDashboardColabData/${personId}`
      );

      handleStoreDashboardColabData(res.data);
    }
  }

  function handleStoreDashboardColabData(colabData) {
    setColabData(colabData);
    sessionStorage.setItem("colabName", colabData.nome);
    sessionStorage.setItem("colabSobrenome", colabData.sobrenome);
    sessionStorage.setItem("discNome", colabData.discNome);
    sessionStorage.setItem("discId", colabData.discId);
  }

  return (
    <ColabContext.Provider
      value={{
        fkPerson,
        colabData,
        handleGetDashboardColabData,
      }}
    >
      {children}
    </ColabContext.Provider>
  );
}

export function useColab() {
  return useContext(ColabContext);
}

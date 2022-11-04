import { createContext, useContext, useState } from "react";
import { axiosAPI } from "../services/axios";

const ColabContext = createContext();

export function ColabContextProvider({ children }) {
  const [fkPerson, setFkPerson] = useState(sessionStorage.getItem("fkPessoa"));
  const [colabData, setColabData] = useState();

  async function getDashboardColabData(personId) {
    if (personId) {
      const res = await axiosAPI.get(
        `Colaborador/GetDashboardColabData/${personId}`
      );

      storeDashboardColabData(res.data);
    }
  }

  function storeDashboardColabData(colabData) {
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
        getDashboardColabData,
      }}
    >
      {children}
    </ColabContext.Provider>
  );
}

export function useColab() {
  return useContext(ColabContext);
}

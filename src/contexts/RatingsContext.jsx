import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { axiosAPI } from "../services/axios";

const RatingContext = createContext();

export function RatingContextProvider({ children }) {
  // GET
  const { data, mutate } = useAxios(
    `Avaliacao/Listar/${sessionStorage.getItem("discId")}`
  );

  // POST
  function handleAddRating(newRating) {
    axiosAPI.post("/NovaAvaliacao", newRating);
    mutate([...data, newRating], false);
  }

  // DELETE
  function handleRemoveRating(id) {
    axiosAPI.delete(`Avaliacao/Excluir/${id}`);
    const updateRatings = data?.filter((current) => current.idAval !== id);
    mutate(updateRatings, false);
  }

  return (
    <RatingContext.Provider
      value={{
        data,
        handleAddRating,
        handleRemoveRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
}

export function useRatings() {
  return useContext(RatingContext);
}

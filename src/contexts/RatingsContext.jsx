import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { axiosAPI } from "../services/axios";

const RatingContext = createContext();

export function RatingContextProvider({ children }) {
  const [discId, setDiscId] = useState(sessionStorage.getItem("discId"));

  // GET
  const { data, mutate } = useAxios(
    `Avaliacao/Listar/${discId}`
  );

  // POST
  function handleAddRating(newRating) {
    axiosAPI.post("/NovaAvaliacao", newRating);
    mutate([...data, newRating], false);
  }

  // DELETE
  function handleRemoveRating(rating) {
    axiosAPI.delete("/Excluir", { data: rating });
    const updateRatings = data?.filter(
      (current) => current.idAval !== rating.idAval
    );
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

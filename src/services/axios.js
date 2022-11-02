import axios from "axios";

export const axiosAPI = axios.create({
  baseURL: "https://192.168.0.163:3001/Avaliacao",
});

import axios from "axios";

const productionHost = "20.55.97.241";
const developmentHost = "192.168.0.163";
export const currentHost = developmentHost;

export const axiosAPI = axios.create({
  baseURL: `https://${currentHost}:3001/`,
});

import axios, { AxiosInstance } from "axios";
import { apiOrigin } from "./httpConifg";

export const customAxios: AxiosInstance = axios.create({
  baseURL: apiOrigin,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Authorization": "Bearer " + localStorage.getItem("token") as string,
  },
});

export default customAxios;

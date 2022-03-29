import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  // baseURL: "http://13.209.123.247:8080",
  baseURL: "http://127.0.0.1:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Authorization": "Bearer " + localStorage.getItem("token") as string,
  },
});

export default customAxios;

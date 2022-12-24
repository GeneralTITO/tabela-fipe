import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.invertexto.com/v1/fipe/",
  timeout: 5000,
});

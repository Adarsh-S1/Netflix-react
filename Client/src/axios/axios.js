import axios from "axios";
import { baseURL } from "./tmdb";
export const client = axios.create({
  baseURL: "http://localhost:5000",
});
export const tmdb = axios.create({
  baseURL:baseURL
})
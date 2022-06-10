import axios from "axios";
import { baseURL } from "./tmdb";
export const tmdb = axios.create({
  baseURL:baseURL
})
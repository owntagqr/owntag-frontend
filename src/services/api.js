import axios from "axios";

const api = axios.create({
  // baseURL: "https://api.owntag.in/api",
  baseURL: "http://localhost:8080/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
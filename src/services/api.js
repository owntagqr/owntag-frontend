import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "https://api.owntag.in/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;


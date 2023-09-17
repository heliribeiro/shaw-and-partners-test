import axios from "axios";

// Base URL of the API using Axios
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export { API };

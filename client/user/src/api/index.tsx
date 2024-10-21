import axios from "axios";
const baseURL = "http://localhost:5001";

const axioisPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export default axioisPrivate;

import axios from "axios";

const api = axios.create({
  baseURL: "https://visual-recognition-api.herokuapp.com"
});

export default api;

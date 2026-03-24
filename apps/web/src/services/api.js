import axios from "axios";

// LabSUS (dados)
export const labsus = axios.create({
  baseURL: "https://labsus-api.ngrok-free.app/api"
});

// LexLab realtime
export const lexlab = axios.create({
  baseURL: "http://localhost:1234"
});

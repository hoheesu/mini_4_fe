import axios from "axios";

const token = localStorage.getItem("accessToken");

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    authorization: token,
  },
});

import axios from "axios";
import { setCookie } from "../cookies/cookies";
import { getNewRefreshToken } from "./refresh";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

authInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken") || "";
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

// ! Refresh토큰이 생성 되면 사용할 예정
authInstance.interceptors.response.use(
  (res) => res, //성공한 경우 걍 결과(result) 내보내줌ㅇㅇ
  async (error) => {
    //await가 문제니까 async 붙여주기
    if (error.response.status === 401) {
      //토큰이 만료된 경우(instance가 실패했을 경우)
      const { accessToken, refreshToken } = await getNewRefreshToken();
      error.config.headers.Authorization = accessToken;
      localStorage.setItem("accessToken", accessToken); //localStorage update
      setCookie("refreshToken", refreshToken); //쿠키 update
      return (await instance.get(error.config.url, error.config)).data;
    }
  },
);

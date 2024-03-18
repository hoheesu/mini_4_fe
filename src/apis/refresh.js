import { instance } from "./axios";
import { setCookie } from "../cookies/cookies";

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = setCookie("refreshToken", refreshToken);
  const result = await instance.post(
    "/refresh",
    {
      refreshToken,
    },
    {
      headers: {
        authorization: accessToken,
      },
    },
  );
  return result.data;
};

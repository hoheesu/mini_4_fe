import { instance } from "./axios";

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
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

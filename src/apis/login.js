import { instance } from "./axios";

export const login = async (id, pw, navigate) => {
  try {
    const result = await instance.post("/log-in", { email: id, password: pw });
    const { accessToken } = result.data;
    localStorage.setItem("accessToken", accessToken);
    navigate("/");
    return result.data;
  } catch (error) {
    if (error.response.status === 401) {
      alert(error.response.data.message);
    }
    return error.response;
  }
};

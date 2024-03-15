import { instance } from "./axios";

export const signUp = async (id, pw, nickname) => {
  try {
    const result = await instance.post("/sign-up", {
      email: id,
      password: pw,
      nickname,
    });
    localStorage.setItem("accessToken", result);
    alert("회원가입 완료!");
    return result.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

import { instance } from "./axios";
import { setCookie } from "../cookies/cookies";

// export const signUp = async (id, pw, nickname) => {
  // try {
  //   const result = await instance.post("/sign-up", {
  //     email: id,
  //     password: pw,
  //     nickname,
  //   });
  //   localStorage.setItem("accessToken", result);
  //   setCookie("refreshToken", result);
  //   alert("회원가입 완료!");
  //   return result.data;
  // } catch (error) {
  //   alert(error.response.data.message);
  // }
// };


export const signUp = async (user) => {
  try {
    const result = await instance
      .post("/sign-up", { email: user.id, password: user.pw, nickname: user.nickname })
      console.log("result==>", result);
    return result;
  } catch (error) {
    alert(error.response.data.message);
  }
};
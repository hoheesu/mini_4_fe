import { instance } from "./axios";

export const signUp = async (user) => {
  try {
    const result = await instance.post("/sign-up", {
      email: user.id,
      password: user.pw,
      nickname: user.nickname,
    });
    return result;
  } catch (error) {
    alert(error.response.data.message);
  }
};

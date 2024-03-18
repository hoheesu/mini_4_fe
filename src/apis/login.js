import { instance } from "./axios";

export const login = async (user) => {
  try {
    const result = await instance
      .post("/log-in", { email: user.id, password: user.pw })
      .then((result) => result);
    return result;
  } catch (error) {
    console.log(error.result);
  }
};

import { instance } from "./axios";

export const getVoteListAll = async () => {
  try {
    const res = await instance.get("/posts");
    return res.data.data;
  } catch (error) {
    return error;
  }
};

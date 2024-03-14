import { instance } from "./axios";

export const getVoteListAll = async () => {
  try {
    const res = await instance.get("/posts");
    return res.data;
  } catch (error) {
    return error;
  }
};

export const createVote = async (vote) => {
    console.log(vote)
    try{
        const res = await instance.post("/posts",vote);
        return res.data;
    } catch(e){
        if (e.response.status === 401) {
            alert(e.response.data.message);
        }
    }
};
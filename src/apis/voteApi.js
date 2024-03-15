import { authInstance, instance } from "./axios";

export const getVoteListAll = async () => {
  try {
    const res = await instance.get("/posts");
    return res.data;
  } catch (error) {
    return error;
  }
};

export const createVote = async (vote) => {
  console.log(vote);
  try {
    const res = await authInstance.post("/posts", vote);
    console.log(res);
    return res.data;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const detailVotePost = async (id) => {
  try {
    const res = await authInstance.get(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};

export const editVotePost = async (id, postDetail) => {
  try {
    const res = await authInstance.put(`/posts/${id}`, postDetail);
    return res.data;
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};

export const removeVotePost = async (id) => {
  try {
    console.log(`Removing ${id}`);
    const res = await authInstance.delete(`/posts/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    // alert(error.response.data.message);
  }
};

export const userVoteOption = async (postId, optionId) => {
  console.log(optionId);
  try {
    const res = await authInstance.post(`/vote/${postId}`, optionId);
    console.log(res);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

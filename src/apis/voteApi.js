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
  try {
    const res = await authInstance.post("/posts", vote);
    alert("등록 완료");
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
    const res = await authInstance.patch(`/posts/${id}`, postDetail);
    alert(res.data.message);
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
    alert(res.data.message);
    return res;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const userVoteOption = async (postId, optionId) => {
  try {
    const res = await authInstance.post(`/vote/${postId}`, optionId);
    alert(res.data.message);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

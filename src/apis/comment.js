import { instance, authInstance } from "./axios";

export const getComment = async () => {
  try {
    const res = await instance.get("/posts/30/comments");
    return res.data;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const createComment = async (content) => {
  try {
    const res = await authInstance.post("/posts/30/comments", content);
    return res.data;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const deleteComment = async (commentId) => {
  try {
    const res = await authInstance.delete(`/posts/30/comments/${commentId}`);
    return res.data;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const updateComment = async (commentId) => {
  try {
    const res = await authInstance.put(`/posts/30/comments/${commentId}`);
    return res.data;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

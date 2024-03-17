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
    const { data } = await authInstance.post("/posts/30/comments", content);
    const result = { ...data, nickname: content.nickname };
    alert("등록 완료");
    return result;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const deleteComment = async (commentId) => {
  try {
    await authInstance.delete(`/posts/30/comments/${commentId}`);
    return commentId;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const updateComment = async (comment) => {
  try {
    const { data } = await authInstance.put(
      `/posts/30/comments/${comment.commentId}`,
      comment,
    );
    let result = { ...data, nickname: comment.nickname };
    return result;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

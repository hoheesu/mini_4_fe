import { instance, authInstance } from "./axios";

export const getComment = async (postId) => {
  try {
    const res = await instance.get(`/posts/${postId}/comments`);
    return res.data;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const createComment = async (contents) => {
  try {
    const { data } = await authInstance.post(
      `/posts/${contents.postId}/comments`,
      { nickname: contents.nickname, content: contents.content },
    );
    const result = { ...data, nickname: contents.nickname };
    alert("등록 완료");
    return result;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const deleteComment = async (comment) => {
  try {
    await authInstance.delete(
      `/posts/${comment.postId}/comments/${comment.commentId}`,
    );
    return comment.commentId;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

export const updateComment = async (comment) => {
  try {
    const { data } = await authInstance.put(
      `/posts/${comment.postId}/comments/${comment.commentId}`,
      {
        commentId: comment.commentId,
        nickname: comment.nickname,
        content: comment.content,
      },
    );
    let result = { ...data, nickname: comment.nickname };
    return result;
  } catch (e) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};

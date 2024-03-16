import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { createComment, deleteComment, getComment } from "../../apis/comment";

function Comments() {
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState([]);

  const onChangeComments = (e) => {
    setContent(e.target.value);
  };
  const onClickCommentHandler = () => {
    content.trim() === ""
      ? alert("글을 작성해 주세요")
      : createComment({ content: content });
  };
  const onClickDeleteComment = (postId) => {
    deleteComment(postId);
  };
  const onClickUpdateComment = () => {
    console.log("ㅎㅇ");
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const jwt = jwtDecode(accessToken.substring(7));
      setUserId(jwt.id);
    }
    getComment().then((res) => {
      setComment(res);
    });
  }, []);
  return (
    <>
      <div>
        <span>{userId}</span>
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => onChangeComments(e)}
          ></input>
        </div>
        <div>
          <button onClick={onClickCommentHandler}>등록</button>
        </div>
      </div>
      {comment.length ? (
        comment.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.userId}</span>
              <div>
                <div>{item.content}</div>
              </div>
              {item.userId === userId ? (
                <div>
                  <button onClick={() => onClickUpdateComment(item.id)}>
                    수정
                  </button>
                  <button onClick={() => onClickDeleteComment(item.id)}>
                    삭제
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })
      ) : (
        <div>로딩중이용~</div>
      )}
    </>
  );
}

export default Comments;

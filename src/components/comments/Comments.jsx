import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Page } from "../user/Common";
import {
  useGetComment,
  useCreateComment,
  useDeleteComment,
  useUpdateComment,
} from "./commentsQuery";
import { useDispatch, useSelector } from "react-redux";
import { __getComments } from "../../redux/modules/commentSlice";

function Comments() {
  // 기능 구현/ 프로젝트 완성 후 리팩토링
  // 컴포넌트 분리
  // customHook input 정도는 해주면 좋을듯?
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [editCommentId, setEditCommentId] = useState("");
  const [editcontent, setEditContent] = useState("");
  const dispatch = useDispatch();
  const getCommentQuery = useGetComment();
  const createCommentMutation = useCreateComment();
  const deleteCommentMutation = useDeleteComment();
  const updateCommentMutation = useUpdateComment();
  const comment = useSelector((state) => state.comments.comment);
  const onChangeComments = (e) => {
    setContent(e.target.value);
  };

  const onClickCommentHandler = () => {
    if (content.trim() === "") {
      alert("글을 작성해 주세요");
    } else {
      createCommentMutation.mutate({ nickname, content });
    }
  };

  const onClickDeleteComment = (commentId) => {
    deleteCommentMutation.mutate(commentId);
  };

  const onClickUpdateComment = (commentId, content) => {
    setEditCommentId(commentId);
    setEditContent(content);
  };

  const onClickFinishUpdateComment = (commentId, nickname) => {
    updateCommentMutation.mutate({
      commentId,
      nickname,
      content: editcontent,
    });
    setEditCommentId("");
    setEditContent("");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const jwt = jwtDecode(accessToken.substring(7));
      setNickname(jwt.nickname);
    }
  }, []);

  useEffect(() => {
    if (getCommentQuery.isSuccess) {
      dispatch(__getComments(getCommentQuery.data));
    }
  }, [getCommentQuery.isSuccess, dispatch]);

  if (getCommentQuery.isPending) {
    return <span>로딩중....</span>;
  }
  if (getCommentQuery.isError) {
    return <span>{console.log("error")}</span>;
  }

  return (
    <Page>
      <div>
        <span>{nickname}</span>
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
              <span>{item.nickname}</span>
              <div>
                {editCommentId === item.id ? (
                  <input
                    type="text"
                    value={editcontent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                ) : (
                  <div>{item.content}</div>
                )}
              </div>
              {item.nickname === nickname ? (
                <div>
                  {editCommentId === item.id ? (
                    <button
                      onClick={() =>
                        onClickFinishUpdateComment(item.id, item.nickname)
                      }
                    >
                      완료
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        onClickUpdateComment(item.id, item.content)
                      }
                    >
                      수정
                    </button>
                  )}
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
        <div>댓글이 없어요!</div>
      )}
    </Page>
  );
}

export default Comments;

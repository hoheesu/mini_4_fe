import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import {
  useGetComment,
  useCreateComment,
  useDeleteComment,
  useUpdateComment,
} from "./commentsQuery";
import { useDispatch, useSelector } from "react-redux";
import { __getComments } from "../../redux/modules/commentSlice";
import { InputWrap } from "../user/Common";
import styled from "styled-components";

const CreateButton = styled.button`
  margin-right: 10px;
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #9e30f4;
  color: white;
  &:disabled {
    background-color: #dadada;
    color: white;
  }
  margin-top: 14px;
`;
const CommentContainer = styled.div`
  width: 100%;
  padding: 0 40px;
`;

const CommentUserContainer = styled.div`
  margin: 20px 0;
  border-top: 1px solid #dadada;
`;
const CommentUser = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 20px;
`;

const CommnetUserWarpper = styled.div`
  margin-top: 10px;
`;

const UserComment = styled.div`
  font-size: 18px;
`;

const CommentInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: 400;
  &::placeholder {
    color: #dadada;
  }
`;

const UserWrap = styled.div`
  margin-top: 87px;
  font-size: 15px;
  font-weight: bold;
  color: #262626;
`;
const CommentButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 10px;
`;
function Comments({ postId }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [editCommentId, setEditCommentId] = useState("");
  const [editcontent, setEditContent] = useState("");
  const dispatch = useDispatch();
  const getCommentQuery = useGetComment(postId);
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
      createCommentMutation.mutate({ postId, nickname, content });
      setContent("");
    }
  };

  const onClickDeleteComment = (commentId) => {
    deleteCommentMutation.mutate({ commentId, postId });
  };

  const onClickUpdateComment = (commentId, content) => {
    setEditCommentId(commentId);
    setEditContent(content);
  };

  const onClickFinishUpdateComment = (commentId, nickname) => {
    updateCommentMutation.mutate({
      postId,
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
    <>
      <CommentContainer>
        <UserWrap>{nickname}님 의견을 남겨 주세요.</UserWrap>
        <InputWrap>
          <CommentInput
            type="text"
            value={content}
            onChange={(e) => onChangeComments(e)}
          ></CommentInput>
        </InputWrap>
        <CommentButtonWrapper>
          <CreateButton onClick={onClickCommentHandler}>등록</CreateButton>
        </CommentButtonWrapper>

        {comment.length ? (
          comment.map((item) => {
            return (
              <CommentUserContainer key={item.id}>
                <CommentUser>작성자: {item.nickname}</CommentUser>
                <CommnetUserWarpper>
                  {editCommentId === item.id ? (
                    <InputWrap>
                      <CommentInput
                        type="text"
                        value={editcontent}
                        onChange={(e) => setEditContent(e.target.value)}
                      />
                    </InputWrap>
                  ) : (
                    <UserComment>{item.content}</UserComment>
                  )}
                </CommnetUserWarpper>
                {item.nickname === nickname ? (
                  <CommentButtonWrapper>
                    {editCommentId === item.id ? (
                      <CreateButton
                        onClick={() =>
                          onClickFinishUpdateComment(item.id, item.nickname)
                        }
                      >
                        완료
                      </CreateButton>
                    ) : (
                      <CreateButton
                        onClick={() =>
                          onClickUpdateComment(item.id, item.content)
                        }
                      >
                        수정
                      </CreateButton>
                    )}
                    <CreateButton onClick={() => onClickDeleteComment(item.id)}>
                      삭제
                    </CreateButton>
                  </CommentButtonWrapper>
                ) : (
                  ""
                )}
              </CommentUserContainer>
            );
          })
        ) : (
          <div>댓글이 없어요!</div>
        )}
      </CommentContainer>
    </>
  );
}

export default Comments;

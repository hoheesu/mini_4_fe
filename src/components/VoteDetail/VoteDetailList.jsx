import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import VoteDetail from "./VoteDetail";
import EditVoteDetail from "./EditVoteDetail";
import Comments from "../comments/Comments";
import { useGetDetails } from "./voteQuery";
import { useIsEditStore } from "./voteZustand";
import styled from "styled-components";

function VoteDetailList() {
  const [voteDetail, setVoteDetail] = useState();
  const [isVote, setIsVote] = useState(false);

  const postEdit = useIsEditStore((state) => state.isEdit);
  const setPostEdit = useIsEditStore((state) => state.setIsEdit);

  const { id } = useParams();
  const getDetailQuery = useGetDetails(id);

  const userId = () => {
    let jwt = jwtDecode(localStorage.getItem("accessToken").substring(7));
    return useRef(jwt.id);
  };
  let userIdt = "";
  if (localStorage.getItem("accessToken")) {
    userIdt = userId();
  }

  const onClickEditVoteDetail = () => {
    confirm("수정하시겠습니까?") ? setPostEdit(true) : setPostEdit(false);
  };

  useEffect(() => {
    console.log("시작");
    if (getDetailQuery.isSuccess) {
      const result = getDetailQuery.data;
      for (const option of result.options) {
        for (const voteHistory of option.voteHistory) {
          if (voteHistory.userId === userIdt.current) {
            setIsVote(true);
          }
        }
      }
      console.log(result);
      setVoteDetail(result);
    }
  }, [id, getDetailQuery, postEdit]);

  return (
    <>
      {!voteDetail ? (
        <p>로딩중...</p>
      ) : !postEdit ? (
        <VoteDetail
          voteDetail={voteDetail}
          onClickEditVoteDetail={onClickEditVoteDetail}
        />
      ) : (
        <EditVoteDetail voteDetail={voteDetail} />
      )}
      {isVote ? (
        <IsVote>이미 투표를 하셨습니다.</IsVote>
      ) : (
        <VoteMessage>투표를 해주세요</VoteMessage>
      )}

      <Comments postId={id} />
    </>
  );
}

const IsVote = styled.p`
  margin-top: 1rem;
  color: #f43030;
  font-size: 1rem;
`;
const VoteMessage = styled.p`
  margin-top: 1rem;
  color: #3040f4;
  font-size: 1rem;
`;

export default VoteDetailList;

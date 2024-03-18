import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import VoteDetail from "./VoteDetail";
import EditVoteDetail from "./EditVoteDetail";
import Comments from "../comments/Comments";
import { useGetDetails } from "./voteQuery";
import { useDetailList, useIsEditStore } from "./voteZustand";
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

  useEffect(() => {
    if (getDetailQuery.isSuccess) {
      const result = getDetailQuery.data;
      for (const option of result.options) {
        for (const voteHistory of option.voteHistory) {
          if (voteHistory.userId === userIdt.current) {
            setIsVote(true);
          }
        }
      }
      setVoteDetail(result);
    }
  }, [id, getDetailQuery, postEdit]);

  const onClickEditVoteDetail = () => {
    if (new Date(voteDetail.endDate).getTime() < new Date()) {
      alert("종료된 투표는 수정할 수 없습니다.");
    } else if (new Date(voteDetail.startDate).getTime() < new Date()) {
      alert("진행중인 투표는 수정할 수 없습니다.");
    } else {
      confirm("수정하시겠습니까?") ? setPostEdit(true) : setPostEdit(false);
    }
  };

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

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userVoteOption } from "../../apis/voteApi";
import percentCalculate from "../../util/percentCalculate";
import dateFormatter from "../../util/dateFormatter";
import { useDeleteDetails } from "./voteQuery";
import { useListStore } from "./voteZustand";

function VoteDetail({ voteDetail, onClickEditVoteDetail }) {
  const [optionVote, setOptionVote] = useState(0);

  const deleteDetailQuery = useDeleteDetails();
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickDeleteVoteDetail = () => {
    deleteDetailQuery.mutate(id);
    navigate("/");
  };

  const onClickVoteOption = (optionId) => {
    userVoteOption(id, { optionId });
  };

  let jwt = jwtDecode(localStorage.getItem("accessToken").substring(7));
  const userId = useRef(jwt.id);

  useEffect(() => {
    if (voteDetail) {
      setOptionVote(
        voteDetail.options.reduce((acc, option) => acc + option.count, 0),
      );
    }
  }, [voteDetail]);

  if (!voteDetail) {
    return null;
  }

  return (
    <>
      <h3>제목 : {voteDetail.title}</h3>
      <p>내용 : {voteDetail.content}</p>
      <p>작성자 : {voteDetail.user.nickname}</p>
      <p>
        투표기간 :
        {dateFormatter(voteDetail.startDate) +
          " ~ " +
          dateFormatter(voteDetail.endDate)}
      </p>
      <ul>
        {voteDetail.options.map((optionItem) => {
          return (
            <li key={optionItem.id}>
              <button
                onClick={() => onClickVoteOption(optionItem.id)}
                value={optionItem.content}
              >
                {optionItem.content}
              </button>
              <span>{percentCalculate(optionItem.count, optionVote)}%</span>
            </li>
          );
        })}
      </ul>
      {userId.current === voteDetail.userId ? (
        <>
          <button onClick={onClickEditVoteDetail}>수정</button>
          <button onClick={onClickDeleteVoteDetail}>삭제</button>
        </>
      ) : null}
    </>
  );
}

export default VoteDetail;

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"; // 추가

import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { removeVotePost, userVoteOption } from "../../apis/voteApi";
import percentCalculate from "../../util/percentCalculate";
import dateFormatter from "../../util/dateFormatter";

function PostWriterDetail({ voteDetail, onClickEditVoteDetail }) {
  const [optionVote, setOptionVote] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  const onClickDeleteVoteDetail = () => {
    removeVotePost(id);
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
    return null; // or loading indicator
  }

  return (
    <>
      <h3>{voteDetail.title}</h3>
      <p>{voteDetail.content}</p>
      <p>
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

export default PostWriterDetail;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  detailVotePost,
  editVotePost,
  removeVotePost,
  userVoteOption,
} from "../apis/voteApi";
import { jwtDecode } from "jwt-decode";
import dateFormatter from "../util/dateFormatter";
import percentCalculate from "../util/percentCalculate";

function VoteDetailList() {
  const [voteDetail, setVoteDetail] = useState();
  const [postEdit, setPostEdit] = useState(false);
  const [optionVote, setOptionVote] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();
  let jwt = jwtDecode(localStorage.getItem("accessToken").substring(7));
  const userId = useRef(jwt.id);

  const onClickEditVoteDetail = () => {
    confirm("수정하시겠습니까?") ? setPostEdit(true) : setPostEdit(false);
  };
  const onClickDeleteVoteDetail = () => {
    removeVotePost(id);
    navigate("/");
    // api호출;
  };
  const onClickVoteOption = (optionId) => {
    // 선택 api post?
    userVoteOption(id, { optionId });
  };
  useEffect(() => {
    setOptionVote(0);
    (async () => {
      const result = await detailVotePost(id);
      console.log(result);
      for (const option of result.options) {
        setOptionVote((prev) => (prev += option.count));
      }
      setVoteDetail(result);
    })();
  }, []);
  console.log(optionVote);

  return (
    <>
      {!voteDetail ? (
        <p>로딩중...</p>
      ) : !postEdit ? (
        <>
          <h3>{voteDetail.title}</h3>
          <p>{voteDetail.content}</p>
          <p>{voteDetail.startDate + " ~ " + voteDetail.endDate}</p>
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
      ) : (
        <>
          <input value={voteDetail.title} />
          <input type="text" value={voteDetail.content} />
          <input type="date" value={dateFormatter(voteDetail.startDate)} />
          <input type="date" value={dateFormatter(voteDetail.endDate)} />
          <ul>
            {voteDetail.options.map((optionItem) => {
              return (
                <li key={optionItem.id}>
                  <input value={optionItem.content} />
                </li>
              );
            })}
          </ul>
          <button>수정 완료 </button>
          <button>수정 취소 </button>
        </>
      )}
    </>
  );
}

export default VoteDetailList;

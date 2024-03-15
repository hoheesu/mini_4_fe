import React from "react";
import { useNavigate } from "react-router-dom";

function VoteDetailList() {
  const navigate = useNavigate();
  const onClickEditVoteDetail = () => {
    navigate("/");
  };
  const onClickDeleteVoteDetail = () => {
    alert("삭제되었습니다.");
    navigate("/");
    // api호출;
  };
  const onClickVoteOption = (e) => {
    // 선택 api post?
    alert(`${e.target.value}가 선택되었습니다.`);
  };
  return (
    <>
      <>
        <h3>{"여기에 제목"}</h3>
        <p>{"여기에 설명(내용)"}</p>
        <p>{"투표 시작 날짜 ~ 투표 종료 날짜"}</p>
        <ul>
          <li>
            <button onClick={(e) => onClickVoteOption(e)} value={"옵션1"}>
              {"여기에 옵션1"}
            </button>
          </li>
          <li>
            <button onClick={(e) => onClickVoteOption(e)} value={"옵션2"}>
              {"여기에 옵션2"}
            </button>
          </li>
          <li>
            <button onClick={(e) => onClickVoteOption(e)} value={"옵션3"}>
              {"여기에 옵션3"}
            </button>
          </li>
        </ul>
      </>
      <button onClick={onClickEditVoteDetail}>수정</button>
      <button onClick={onClickDeleteVoteDetail}>삭제</button>
    </>
  );
}

export default VoteDetailList;

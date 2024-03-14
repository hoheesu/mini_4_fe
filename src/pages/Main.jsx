import React from "react";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();

  const onClickCreateVote = () => {
    navigate("/vote/create");
  };
  return (
    <>
      <div>메인입니다.</div>
      <button onClick={onClickCreateVote}>추가</button>
    </>
  );
}

export default Main;

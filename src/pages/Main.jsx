import React from "react";
import { instance } from "../apis/axios";
import { useNavigate } from "react-router-dom";
import VoteListMain from "../components/VoteListMain";

function Main() {
  const navigate = useNavigate();
  const onClickLogoutHandler = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <>
      <div>메인입니다.</div>
      <button onClick={onClickLogoutHandler}>로그아웃</button>
      <VoteListMain />
    </>
  );
}

export default Main;

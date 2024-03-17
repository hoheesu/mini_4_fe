import React from "react";
import { useNavigate } from "react-router-dom";
import VoteListMain from "../components/VoteListMain";
import { removeCookie } from "../cookies/cookies";

function Main() {
  const navigate = useNavigate();
  const onClickLogoutHandler = () => {
    localStorage.removeItem("accessToken");
    removeCookie("refreshToken");
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

import React from "react";
import VoteList from "../components/VoteList";
import { instance } from "../apis/axios";

function Main() {
  instance();
  return (
    <>
      <div>메인입니다.</div>
      <VoteList />
    </>
  );
}

export default Main;

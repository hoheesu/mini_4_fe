import React from "react";
import VoteDetailList from "../components/VoteDetail/VoteDetailList";

function VoteDetail() {
  return (
    <>
      {console.log(localStorage.getItem("accessToken"))}
      <VoteDetailList />
    </>
  );
}

export default VoteDetail;

import React from "react";
import VoteDetailList from "../components/VoteDetail/VoteDetailList";
import withAuth from "../hocs/hoc";

function VoteDetail() {
  return (
    <>
      <VoteDetailList />
    </>
  );
}

export default withAuth(VoteDetail, false);

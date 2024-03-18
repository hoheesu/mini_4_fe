import React from "react";
import VoteForm from "../components/voteForm/VoteForm";
import withAuth from "../hocs/hoc";

function VoteCreate() {
  return <VoteForm />;
}

export default withAuth(VoteCreate, false);

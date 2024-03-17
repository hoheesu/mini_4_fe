import React, { useEffect, useState } from "react";
import { getVoteListAll } from "../apis/voteApi";
import { useNavigate } from "react-router-dom";
import dateFormatter from "../util/dateFormatter";
import { useListStore } from "./VoteListMain";

function VoteList({ listCategory }) {
  const voteList = useListStore((state) => state.listsAll);

  const navigate = useNavigate();
  switch (listCategory) {
    case "close":
      return voteList.map((voteItem) => {
        if (new Date(voteItem.endDate).getTime() < new Date()) {
          return (
            <li key={voteItem.id}>
              <button onClick={() => navigate(`/vote/detail/${voteItem.id}`)}>
                <p>{voteItem.title}</p>
                <p>~{dateFormatter(voteItem.endDate)}</p>
              </button>
            </li>
          );
        }
      });
    case "ongoing":
      return voteList
        .sort((a, b) => new Date(a.endDate) - new Date(b.endDate))
        .map((voteItem) => {
          if (
            new Date(voteItem.startDate).getTime() < new Date() &&
            new Date(voteItem.endDate).getTime() > new Date()
          ) {
            return (
              <li key={voteItem.id}>
                <button onClick={() => navigate(`/vote/detail/${voteItem.id}`)}>
                  <p>{voteItem.title}</p>
                  <p>
                    {dateFormatter(voteItem.startDate)}~
                    {dateFormatter(voteItem.endDate)}
                  </p>
                </button>
              </li>
            );
          }
        });
    case "pending":
      return voteList
        .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
        .map((voteItem) => {
          if (new Date(voteItem.startDate).getTime() > new Date()) {
            return (
              <li key={voteItem.id}>
                <button onClick={() => navigate(`/vote/detail/${voteItem.id}`)}>
                  <p>{voteItem.title}</p>
                  <p>{dateFormatter(voteItem.startDate)}~</p>
                </button>
              </li>
            );
          }
        });

    default:
      return <p>기본값</p>;
  }
}

export default VoteList;

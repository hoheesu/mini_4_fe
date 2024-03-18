import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dateFormatter from "../util/dateFormatter";
import { useListStore } from "./VoteDetail/voteZustand";
import styled from "styled-components";
import { useGetListsAll } from "./VoteDetail/voteQuery";

const StyledButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #f7f7f7;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #9e30f4;
    color: white;
  }
  :nth-child(1) {
    font-weight: bold;
    font-size: 20px;
  }
  :nth-child(2) {
    font-weight: 500;
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

function VoteList({ listCategory }) {
  // const voteList = useListStore((state) => state.listsAll);
  const { data } = useGetListsAll();
  console.log(data);

  const navigate = useNavigate();
  if (!data) {
    return <p>로딩중</p>;
  }
  switch (listCategory) {
    case "close":
      return data.map((voteItem) => {
        if (new Date(voteItem.endDate).getTime() < new Date()) {
          return (
            <StyledListItem key={voteItem.id}>
              <StyledButton
                onClick={() => navigate(`/vote/detail/${voteItem.id}`)}
              >
                <p>{voteItem.title}</p>
                <p>~{dateFormatter(voteItem.endDate)}</p>
              </StyledButton>
            </StyledListItem>
          );
        }
      });

    case "ongoing":
      return data
        .sort((a, b) => new Date(a.endDate) - new Date(b.endDate))
        .map((voteItem) => {
          if (
            new Date(voteItem.startDate).getTime() < new Date() &&
            new Date(voteItem.endDate).getTime() > new Date()
          ) {
            return (
              <StyledListItem key={voteItem.id}>
                <StyledButton
                  onClick={() => navigate(`/vote/detail/${voteItem.id}`)}
                >
                  <p>{voteItem.title}</p>
                  <p>
                    {dateFormatter(voteItem.startDate)}~
                    {dateFormatter(voteItem.endDate)}
                  </p>
                </StyledButton>
              </StyledListItem>
            );
          }
        });

    case "pending":
      return data
        .sort((a, b) => new Date(a.endDate) - new Date(b.endDate))
        .map((voteItem) => {
          if (new Date(voteItem.startDate).getTime() > new Date()) {
            return (
              <StyledListItem key={voteItem.id}>
                <StyledButton
                  onClick={() => navigate(`/vote/detail/${voteItem.id}`)}
                >
                  <p>{voteItem.title}</p>
                  <p>{dateFormatter(voteItem.startDate)}~</p>
                </StyledButton>
              </StyledListItem>
            );
          }
        });

    default:
      return <p>기본값</p>;
  }
}

export default VoteList;

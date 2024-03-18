import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userVoteOption } from "../../apis/voteApi";
import percentCalculate from "../../util/percentCalculate";
import dateFormatter from "../../util/dateFormatter";
import { useDeleteDetails, useVoteOptions } from "./voteQuery";
import styled from "styled-components";

function VoteDetail({ voteDetail, onClickEditVoteDetail }) {
  const [optionVote, setOptionVote] = useState(0);

  const deleteDetailQuery = useDeleteDetails();
  const voteOptionsQuery = useVoteOptions();
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickDeleteVoteDetail = () => {
    deleteDetailQuery.mutate(id);
    navigate("/");
  };

  const onClickVoteOption = (optionId) => {
    voteOptionsQuery.mutate({ id, optionId });
  };

  let jwt = jwtDecode(localStorage.getItem("accessToken").substring(7));
  const userId = useRef(jwt.id);

  useEffect(() => {
    if (voteDetail) {
      setOptionVote(
        voteDetail.options.reduce((acc, option) => acc + option.count, 0),
      );
    }
  }, [voteDetail]);

  if (!voteDetail) {
    return null;
  }

  return (
    <DetailContainer>
      <FlexContainer>
        <H3>
          <>제목 :</> {voteDetail.title}
        </H3>
        <P>
          <span>내용 :</span> {voteDetail.content}
        </P>
        <P>
          <span>작성자 :</span> {voteDetail.user.nickname}
        </P>
        <P>
          <span>투표기간 :</span>
          {dateFormatter(voteDetail.startDate) +
            " ~ " +
            dateFormatter(voteDetail.endDate)}
        </P>
        <OptionsWrap>
          {voteDetail.options.map((optionItem) => {
            return (
              <OptionItemContainer
                key={optionItem.id}
                $bgc={percentCalculate(optionItem.count, optionVote)}
              >
                <OptionButton
                  onClick={() => onClickVoteOption(optionItem.id)}
                  value={optionItem.content}
                >
                  <span style={{ color: "black" }}>{optionItem.content} </span>
                  <span style={{ color: "black" }}>
                    {percentCalculate(optionItem.count, optionVote)}%
                  </span>
                </OptionButton>
              </OptionItemContainer>
            );
          })}
        </OptionsWrap>
        {userId.current === voteDetail.userId ? (
          <UserButtonsWrap>
            <button onClick={onClickEditVoteDetail}>수정</button>
            <button onClick={onClickDeleteVoteDetail}>삭제</button>
          </UserButtonsWrap>
        ) : null}
      </FlexContainer>
    </DetailContainer>
  );
}
const DetailContainer = styled.div`
  width: 100%;
  padding: 0 40px;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  border: 1px solid #e2e0e0;
  border-radius: 0.5rem;
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;
const P = styled.p`
  font-size: 1rem;
`;

const OptionsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.7rem;
  border-radius: 0.5rem;
`;

const OptionItemContainer = styled.li`
  width: ${(props) => props.$bgc}%;
  background-color: #9e30f4;
  border-radius: 0.5rem;
`;
const OptionButton = styled.button`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  color: #fff;
  > span:first-child {
    width: 300px;
    text-align: left;
  }
`;

const UserButtonsWrap = styled.span`
  display: flex;
  justify-content: center;
  gap: 3rem;
  border-radius: 0.5rem;
  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: white;
    &:nth-child(1) {
      background-color: #3040f4;
    }
    &:nth-child(2) {
      background-color: #f43030;
    }
  }
`;

export default VoteDetail;

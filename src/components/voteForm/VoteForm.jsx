import React, { useEffect, useState } from "react";
import { createVote } from "../../apis/voteApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as S from "./VoteFormStyle";
import { Page } from "../user/Common";
import { useNavigate } from "react-router-dom";

function VoteForm() {
  const dateFormat = (vDate) => {
    let date = new Date();
    vDate === "today"
      ? (date = new Date())
      : (date = new Date(date.setDate(date.getDate() + 1)));
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };
  const navigate = useNavigate();
  const [options, setOptions] = useState([""]);
  const [posts, setPosts] = useState({
    title: "",
    content: "",
    startDate: dateFormat("today"),
    endDate: dateFormat("tomorrow"),
    options: {},
  });

  const onClickOptionAdd = () => {
    if (options.length >= 5) {
      return alert("최대 5개 항목만 가능해요!");
    } else {
      setOptions([...options, ""]);
    }
  };

  const onClickOptionMinus = (index) => {
    if (options.length > 1) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    }
  };

  const onChangeOptionState = (index, e) => {
    const newOption = [...options];
    newOption[index] = e.target.value;
    setOptions(newOption);
  };

  const onChangeTitle = (e) => {
    setPosts({ ...posts, title: e.target.value });
  };

  const onChangeContent = (e) => {
    setPosts({ ...posts, content: e.target.value });
  };

  const onChangeStartDate = (e) => {
    const selectedStartDate = e.target.value;
    const nextDay = new Date(selectedStartDate);
    nextDay.setDate(nextDay.getDate() + 1);
    const formattedNextDay = nextDay.toISOString().split("T")[0];

    setPosts({
      ...posts,
      startDate: selectedStartDate,
      endDate: formattedNextDay,
    });
  };

  const onChangeEndDate = (e) => {
    if (e.target.value === posts.startDate) {
      return alert("시작일 이후 날짜를 선택해 주세요.");
    } else {
      setPosts({ ...posts, endDate: e.target.value });
    }
  };

  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createVote,
    onSuccess: () => {
      queryClient.invalidateQueries("votes");
    },
  });

  const voteCreateHandler = async () => {
    let isTrue = true;
    let alertText = "";

    const updatedOptions = options.map((value) => {
      if (value.trim() === "") {
        alertText = "빈칸을 입력해 주세요.";
        isTrue = false;
      } else {
        return { content: value };
      }
    });

    if (posts.title.trim() === "" || posts.content.trim() === "") {
      alertText = "제목, 내용을 모두 입력해 주세요.";
      isTrue = false;
    }

    if (isTrue) {
      try {
        await createMutation.mutate({ ...posts, options: updatedOptions });
        setPosts({
          title: "",
          content: "",
          startDate: dateFormat("today"),
          endDate: dateFormat("tomorrow"),
          multiVote: false,
          options: {},
        });
        setOptions([""]);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      return alert(alertText);
    }
  };

  return (
    <Page>
      <S.Form>
        <div>
          <S.TitleInput
            type="text"
            value={posts.title}
            placeholder="제목"
            onChange={(e) => onChangeTitle(e)}
          />
        </div>
        <div>
          <S.ContentInput
            type="text"
            value={posts.content}
            placeholder="내용"
            onChange={(e) => onChangeContent(e)}
          />
        </div>
        <S.OptionItemContainer>
          <span>시작 날짜:</span>
          <S.DateInput
            type="date"
            name="startDate"
            min={dateFormat("today")}
            value={posts.startDate}
            onChange={(e) => onChangeStartDate(e)}
          />
          <span>종료 날짜:</span>
          <S.DateInput
            type="date"
            name="endDate"
            min={posts.startDate}
            value={posts.endDate}
            onChange={(e) => onChangeEndDate(e)}
          />
        </S.OptionItemContainer>
        <S.CreateButtonWrapper>
          <S.CreateButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              voteCreateHandler();
            }}
          >
            등록
          </S.CreateButton>
          <S.CreateButton type="button" onClick={onClickOptionAdd}>
            +
          </S.CreateButton>
        </S.CreateButtonWrapper>
        {options.map((option, index) => (
          <S.InputContainer key={index}>
            <S.OptionInput
              type="text"
              value={option}
              onChange={(e) => onChangeOptionState(index, e)}
            />
            <S.RemoveButton
              type="button"
              onClick={() => onClickOptionMinus(index)}
            >
              -
            </S.RemoveButton>
          </S.InputContainer>
        ))}
      </S.Form>
    </Page>
  );
}

export default VoteForm;

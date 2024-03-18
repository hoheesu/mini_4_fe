import React, { useState } from "react";
import * as S from "../voteForm/VoteFormStyle";
import { Page } from "../user/Common";
import dateFormatter from "../../util/dateFormatter";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateDetails } from "./voteQuery";

function EditVoteDetail({ voteDetail }) {
  const optionDetail = voteDetail.options.map((option) => {
    return option.content;
  });

  const [options, setOptions] = useState([...optionDetail]);
  const [posts, setPosts] = useState({
    title: voteDetail.title,
    content: voteDetail.content,
    startDate: dateFormatter(voteDetail.startDate),
    endDate: dateFormatter(voteDetail.endDate),
    options: {},
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const updateDetailsMutate = useUpdateDetails();

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
    setPosts({
      ...posts,
      startDate: selectedStartDate,
    });
  };

  const onChangeEndDate = (e) => {
    if (e.target.value === posts.startDate) {
      return alert("시작일 이후 날짜를 선택해 주세요.");
    } else {
      setPosts({ ...posts, endDate: e.target.value });
    }
  };

  const editDetailHandler = async () => {
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
      console.log("수정클릭");
      try {
        updateDetailsMutate.mutate({ ...posts, options: updatedOptions, id });
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
            min={dateFormatter("today")}
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
          {/* <CheckInput type="checkbox" onClick={toggleMultiVote} />
          <span>중복 여부</span> */}
        </S.OptionItemContainer>
        <S.CreateButtonWrapper>
          <S.CreateButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              editDetailHandler();
            }}
          >
            수정
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

export default EditVoteDetail;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createVote } from "../apis/voteApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Form = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid #aaaaaa;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

const OptionInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  background-color: #e6e6e6;
`;

const TitleInput = styled.input`
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 30px;
`;

const ContentInput = styled.input`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e6e6e6;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  font-size: 20px;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff224e;
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const DateInput = styled.input`
  margin: 0 10px 10px 0;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  font-weight: bold;
  background-color: #e6e6e6;
`;

const CreateButton = styled.button`
  padding: 3px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e6e6e6;
`;

// const CheckInput = styled.input`
//   appearance: none;
//   border: 1.5px solid gainsboro;
//   border-radius: 0.35rem;
//   width: 1.5rem;
//   height: 1.5rem;
//   margin: 0 10px 0 0;

//   &:checked {
//     border-color: transparent;
//     background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
//     background-size: 100% 100%;
//     background-position: 50%;
//     background-repeat: no-repeat;
//     background-color: #ff224e;
//   }
// `;

const OptionItemContainer = styled.div`
  display: flex;
`;

const CreateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
`;
function VoteCreate() {
  const [options, setOptions] = useState([""]);
  const [posts, setPosts] = useState({
    title: "",
    content: "",
    startDate: "",
    endDate: "",
    // multiVote:false,
    options: {},
  });

  const dateFormat = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
  };

  const onClickOptionAdd = () => {
    setOptions([...options, ""]);
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
    setPosts({
      ...posts,
      startDate: e.target.value,
      endDate: e.target.value,
    });
  };

  const onChangeEndDate = (e) => {
    setPosts({ ...posts, endDate: e.target.value });
  };

  // const toggleMultiVote = () => {
  //   setPosts({ ...posts, multiVote: !posts.multiVote });
  // };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createVote,
    onSuccess: () => {
      queryClient.invalidateQueries("votes");
    },
  });

  const voteCreateHandler = async () => {
    try {
      const updatedOptions = options.map((value) => ({ content: value }));
      await mutation.mutate({ ...posts, options: updatedOptions });
      setPosts({
        title: "",
        content: "",
        startDate: dateFormat(),
        endDate: dateFormat(),
        multiVote: false,
        options: {},
      });
      setOptions([""]);
      alert("등록이 완료 되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPosts({
      ...posts,
      startDate: dateFormat(),
      endDate: dateFormat(),
    });
  }, []);

  return (
    <>
      <Form>
        <div>
          <TitleInput
            type="text"
            value={posts.title}
            placeholder="제목"
            onChange={(e) => onChangeTitle(e)}
          />
        </div>
        <div>
          <ContentInput
            type="text"
            value={posts.content}
            placeholder="내용"
            onChange={(e) => onChangeContent(e)}
          />
        </div>
        <OptionItemContainer>
          <DateInput
            type="date"
            name="startDate"
            min={posts.startDate}
            value={posts.startDate}
            onChange={(e) => onChangeStartDate(e)}
          />
          <DateInput
            type="date"
            name="endDate"
            min={posts.startDate}
            value={posts.endDate}
            onChange={(e) => onChangeEndDate(e)}
          />
          {/* <CheckInput type="checkbox" onClick={toggleMultiVote} />
          <span>중복 여부</span> */}
        </OptionItemContainer>
        {options.map((option, index) => (
          <InputContainer key={index}>
            <OptionInput
              type="text"
              value={option}
              onChange={(e) => onChangeOptionState(index, e)}
            />
            <RemoveButton
              type="button"
              onClick={() => onClickOptionMinus(index)}
            >
              -
            </RemoveButton>
          </InputContainer>
        ))}
        <CreateButtonWrapper>
          <CreateButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              voteCreateHandler();
            }}
          >
            등록
          </CreateButton>
          <CreateButton type="button" onClick={onClickOptionAdd}>
            +
          </CreateButton>
        </CreateButtonWrapper>
      </Form>
    </>
  );
}

export default VoteCreate;

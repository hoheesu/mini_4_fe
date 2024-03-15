// import React from 'react'
// import SignForm from './components/SignForm'

// function SignUp() {
//   return (
//     <>
//       <SignForm route="/sign-up"/>
//     </>
//   )
// }

// export default SignUp

import React from "react";
import {
  Wrapper,
  Title,
  Inputs,
  Form,
  Input,
  Button,
  CustomLink,
} from "../components/user/Common";
import { useNavigate } from "react-router-dom";
import { signUp } from "../apis/signUp";
import { useForm } from "../hooks/useForm";
import { idCheck } from "../util/Id";
import { passwordCheck } from "../util/Password";
import { nicknameCheck } from "../util/Nickname";

function SignUp() {
  const [id, setId] = useForm("");
  const [pw, setPw] = useForm("");
  const [nickname, setNickname] = useForm("");
  const navigate = useNavigate();

  const onClickSignUp = async () => {
    if (id === "" || pw === "" || nickname === "") {
      alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
      return;
    }
    if (!idCheck(id)) {
      alert("올바른 아이디(메일주소) 형식을 입력하세요.");
      return;
    }
    if (!nicknameCheck(nickname)) {
      alert("올바른 닉네임 형식(3~15자리)을 입력하세요.");
      return;
    }
    if (!passwordCheck(pw)) {
      alert(
        "올바른 비밀번호 형식(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)을 입력하세요.",
      );
      return;
    }

    await signUp(id, pw, nickname);
    navigate("/login");
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Form>
        <Inputs>
          아이디
          <Input placeholder="아이디" value={id} onChange={setId} />
          닉네임
          <Input
            placeholder="닉네임(3~15자리)"
            value={nickname}
            onChange={setNickname}
          />
          비밀번호
          <Input
            placeholder="비밀번호(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)"
            type="password"
            value={pw}
            onChange={setPw}
          />
        </Inputs>
        <CustomLink to="/login">로그인</CustomLink>
        <Button onClick={onClickSignUp}>회원가입</Button>
        <CustomLink to="/">홈으로 가기</CustomLink>
      </Form>
    </Wrapper>
  );
}

export default SignUp;

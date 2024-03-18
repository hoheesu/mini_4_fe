import {
  Page,
  TitleWrap,
  ContentWrap,
  InputTitle,
  Input,
  InputWrap,
  ErrorMessageWrap,
  BottomButton,
  CustomLink,
  ButtonContainer,
} from "../components/user/Common";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { idCheck } from "../util/Id";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "../cookies/cookies";
import React, { useEffect, useState } from "react";
import withAuth from "../hocs/hoc";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const refreshToken = data.data.refreshToken;
      const accessToken = data.data.accessToken;
      if (data.status === 200) {
        localStorage.setItem("accessToken", accessToken);
        setCookie("refreshToken", refreshToken);
        alert(`로그인 성공하였습니다. 메인페이지로 이동합니다!`);
        navigate("/");
      }
    },
    onError: (error) => {
      console.log("로그인 실패 : ", error);
      alert("로그인에 실패하였습니다!");
    },
  });

  const onClickLoginButton = async (e) => {
    e.preventDefault();
    if (id === "" || pw === "") {
      alert("아이디(메일주소)와 비밀번호를 모두 입력하세요.");
      return;
    }
    if (!idCheck(id)) {
      alert("올바른 아이디(메일주소) 형식을 입력하세요.");
      return;
    }
    loginMutation.mutate({ id, pw });
    navigate("/");
  };

  return (
    <Page>
      <TitleWrap>로그인</TitleWrap>
      <ContentWrap>
        <InputTitle>아이디</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="text"
            placeholder="이메일 주소"
            value={id}
            onChange={handleId}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {!idValid && id.length > 0 && (
            <div>올바른 아이디를 입력해주세요.</div>
          )}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: "26px" }}>비밀번호</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="password"
            placeholder="최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자"
            value={pw}
            onChange={handlePw}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {!pwValid && pw.length > 0 && (
            <div>
              최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자로
              입력해주세요.
            </div>
          )}
        </ErrorMessageWrap>
        <ButtonContainer>
          <BottomButton onClick={onClickLoginButton} disabled={notAllow}>
            로그인
          </BottomButton>
          <CustomLink to="/signup" style={{ textDecoration: "none" }}>
            회원가입
          </CustomLink>
          <CustomLink to="/" style={{ textDecoration: "none" }}>
            홈으로
          </CustomLink>
        </ButtonContainer>
      </ContentWrap>
    </Page>
  );
}

export default withAuth(Login, true);

// import React from "react";
// import {
//   Wrapper,
//   Title,
//   Inputs,
//   Form,
//   Input,
//   Button,
//   CustomLink,
// } from "../components/user/Common";
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
} from "../components/user/Common";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { idCheck } from "../util/Id";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "../cookies/cookies";
// import { useForm } from "../hooks/useForm";

// function Login() {
// const [id, onChangeId] = useForm("");
// const [pw, onChangePw] = useForm("");
//   const navigate = useNavigate();

//   // const setIsUserValid = useBearStore((store)=> state.setIsUserValid);

// const onClickLogin = async () => {
//   // const dbId = "hh2ih@gmail.com"
//   // const dbPw = "1aaaaaQ"

//   if (id === "" || pw === "") {
//     alert("아이디(메일주소)와 비밀번호를 모두 입력하세요.");
//     return;
//   }
//   if (!idCheck(id)) {
//     alert("올바른 아이디(메일주소) 형식을 입력하세요.");
//     return;
//   }
//   // if(id === dbId && pw === dbPw) {
//   //     // setIsUserValid(true);
//   //     //true
//   //     // "/"
//   // }
//   await login(id, pw, navigate);
// };

//   return (
//     <Wrapper>
//       <Title></Title>
//       <Form>
//         <Inputs>
//           아이디
//           <Input placeholder="메일주소" value={id} onChange={onChangeId} />
//           비밀번호
//           <Input
//             placeholder="비밀번호(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)"
//             type="password"
//             value={pw}
//             onChange={onChangePw}
//           />
//         </Inputs>
//         <Button onClick={onClickLogin}>로그인</Button>
//         <CustomLink to="/signup">회원가입</CustomLink>
//         <CustomLink to="/">홈으로 가기</CustomLink>
//       </Form>
//     </Wrapper>
//   );
// }

// export default Login;

// 로그인 아이디 비번
// {
//     "id" : "hh2ih@gmail.com",
//     "password" : "1aaaaaQ"
//     }

import React, { useEffect, useState } from "react";

const User = {
  id: "hh2ih@gmail.com",
  password: "1aaaaaQ",
};

export default function Login() {
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
    loginMutation.mutate({id, pw});
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
      </ContentWrap>
      <BottomButton onClick={onClickLoginButton} disabled={notAllow}>
        로그인
      </BottomButton>
      <CustomLink to="/signup" style={{ textDecoration: "none" }}>
        회원가입 후비고~
      </CustomLink>
      <CustomLink to="/" style={{ textDecoration: "none" }}>
        홈으로 후비고~
      </CustomLink>
    </Page>
  );
}

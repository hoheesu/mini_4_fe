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

import React, { useEffect, useState } from "react";
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
import { signUp } from "../apis/signUp";
import { useForm } from "../hooks/useForm";
import { idCheck } from "../util/Id";
import { passwordCheck } from "../util/Password";
import { nicknameCheck } from "../util/Nickname";
import { setCookie } from "../cookies/cookies";
import { useMutation } from "@tanstack/react-query";

function SignUp() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_check, setPw_check] = useState("");
  const [nickname, setNickname] = useState("");


  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);
  const [pw_checkValid, setPw_checkValid] = useState("");
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (idValid && nicknameValid && pwValid && pw_checkValid ) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, nicknameValid, pwValid, pw_checkValid]);

  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
    const regex = /^[a-zA-Z0-9\uAC00-\uD7A3]{3,15}$/;
    if (regex.test(e.target.value)) {
      setNicknameValid(true);
    } else {
      setNicknameValid(false);
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

  const handlePw_check = (e) => {
    setPw_check(e.target.value);
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/;
    if (regex.test(e.target.value)) {
      setPw_checkValid(true);
    } else {
      setPw_checkValid(false);
      (false);
    }
  };

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log("data", data)
      if (data.status === 200) {
        alert("회원가입 안성~");
        navigate("/login");
      }
    },
    onError: (error) => {
      alert("회원가입 실패 : ", error.response.data.message);
    },
  });

  // try {
  //   const result = await instance.post("/sign-up", {
  //     email: id,
  //     password: pw,
  //     nickname,
  //   });
  //   localStorage.setItem("accessToken", result);
  //   setCookie("refreshToken", result);
  //   alert("회원가입 완료!");
  //   return result.data;
  // } catch (error) {
  //   alert(error.response.data.message);
  // }



  const onClickSignUpButton = async () => {
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
    signUpMutation.mutate({id, pw, nickname});
    navigate("/login");
  };

  return (
    <Page>
      <TitleWrap>회원가입</TitleWrap>
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
            <div>이메일 형식으로 입력해주세요.</div>
          )}
        </ErrorMessageWrap>
        <InputTitle>닉네임</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="text"
            placeholder="닉네임(3~15자리)"
            value={nickname}
            onChange={handleNickname}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {!nicknameValid && nickname.length > 0 && (
            <div>닉네임은 3~15자리로 입력해주세요.</div>
          )}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: "26px" }}>비밀번호</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="password"
            placeholder="영문, 숫자 조합 8자리 이상 20자리 이하"
            value={pw}
            onChange={handlePw}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {!pwValid && pw.length > 0 && (
            <div>
              최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자로 입력해주세요.
            </div>
          )}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: "26px" }}>비밀번호 확인</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
            value={pw_check}
            onChange={handlePw_check}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {pw_check !== pw && pw_check.length > 0 && (
            <div>비밀번호가 일치하지 않습니다.</div>
          )}
        </ErrorMessageWrap>
      </ContentWrap>
      <BottomButton onClick={onClickSignUpButton} disabled={notAllow}>
        회원가입 후비고~
      </BottomButton>
      <CustomLink to="/login" style={{ textDecoration: "none" }}>
        로그인하러 후비고~
      </CustomLink>
      <CustomLink to="/" style={{ textDecoration: "none" }}>
        홈으로 후비고~
      </CustomLink>
    </Page>
  );
}

export default SignUp;

// import React, { useEffect, useState } from "react";

// const User = {
//   id: "hh2ih@gmail.com",
//   password: "1aaaaaQ",
// };

// export default function Login() {
// const [id, setId] = useState("");
// const [pw, setPw] = useState("");

//   const [idValid, setIdValid] = useState(false);
//   const [pwValid, setPwValid] = useState(false);
//   const [notAllow, setNotAllow] = useState(true);

//   useEffect(() => {
//     if (idValid && pwValid) {
//       setNotAllow(false);
//       return;
//     }
//     setNotAllow(true);
//   }, [idValid, pwValid]);

//   const handleId = (e) => {
//     setId(e.target.value);
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (regex.test(e.target.value)) {
//       setIdValid(true);
//     } else {
//       setIdValid(false);
//     }
//   };
//   const handlePw = (e) => {
//     setPw(e.target.value);
//     const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/;
//     if (regex.test(e.target.value)) {
//       setPwValid(true);
//     } else {
//       setPwValid(false);
//     }
//   };
//   const onClickConfirmButton = () => {
//     if (id === User.id && pw === User.pw) {
//       alert("로그인에 성공했습니다.");
//     } else {
//       alert("등록되지 않은 회원입니다.");
//     }
//   };

//   return (
// <Page>
//   <TitleWrap>로그인</TitleWrap>
//   <ContentWrap>
//     <InputTitle>아이디</InputTitle>
//     <InputWrap>
//       <Input
//         className="input"
//         type="text"
//         placeholder="이메일 주소"
//         value={id}
//         onChange={handleId}
//       />
//     </InputWrap>
//     <ErrorMessageWrap>
//       {!idValid && id.length > 0 && (
//         <div>올바른 아이디를 입력해주세요.</div>
//       )}
//     </ErrorMessageWrap>
//     <InputTitle>닉네임</InputTitle>
//     <InputWrap>
//       <Input
//         className="input"
//         type="text"
//         placeholder="닉네임(3~15자리)"
//         value={id}
//         onChange={handleId}
//       />
//     </InputWrap>
//     <ErrorMessageWrap>
//       {!idValid && id.length > 0 && (
//         <div>올바른 아이디를 입력해주세요.</div>
//       )}
//     </ErrorMessageWrap>
//     <InputTitle style={{ marginTop: "26px" }}>비밀번호</InputTitle>
//     <InputWrap>
//       <Input
//         className="input"
//         type="password"
//         placeholder="영문,"
//         value={pw}
//         onChange={handlePw}
//       />
//     </InputWrap>
//     <ErrorMessageWrap>
//       {!pwValid && pw.length > 0 && (
//         <div>최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자로 입력해주세요.</div>
//       )}
//     </ErrorMessageWrap>
//   </ContentWrap>
//   <BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
//     로그인
//   </BottomButton>
//   {/* <BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
//         회원가입
//       </BottomButton> */}
// </Page>
//   );
// }

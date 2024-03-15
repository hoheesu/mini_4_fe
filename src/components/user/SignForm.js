// import React, { useState } from "react";
// import {
//     Wrap,
//   Title,
//   InputWrap,
//   Form,
//   Input,
//   Button,
//   CustomLink,
// } from "./Common";
// import { useNavigate } from "react-router-dom";
// import { signUp } from "../../apis/signUp"
// import { login } from "../../apis/login";
// import { idCheck } from "../../util/Id";
// import { passwordCheck } from "../../util/Password";
// import { nicknameCheck } from "../../util/Nickname";
// import { useForm } from "../../hooks/useForm";

// function SignForm() {
//     // useState 초기값 false

//   const [id, setId] = useForm("");
//   const [pw, setPw] = useForm("");
//   const [nickname, setNickname] = useForm("");
//   const [isSignUp, setIsSignUp] = useState(true);
//   const navigate = useNavigate();

//   const onClickSignUpOrLogin = async () => {
//     if (id === "" || pw === "") {
//       alert("아이디와 비밀번호를 모두 입력하세요.");
//       return;
//     }
//     if (!idCheck(id)) {
//       alert("올바른 아이디(메일주소) 형식을 입력하세요.");
//       return;
//     }
//     if (isSignUp) {
//       if (!nicknameCheck(nickname)) {
//         alert("올바른 닉네임 형식(3~15자리)을 입력하세요.");
//         return;
//       }
//       if (!passwordCheck(pw)) {
//         alert(
//           "올바른 비밀번호 형식(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)을 입력하세요.",
//         );
//         return;
//       }
//       await signUp(id, pw, nickname);
//       navigate("/login");
//     } else {
//       await login(id, pw, navigate);
//     }
//   };

//   return (
//     <Wrap>
//       <Title>{isSignUp ? "회원가입" : "로그인"}</Title>
//       <Form>
//         <InputWrap>
//           아이디
//           <Input placeholder="아이디" value={id} onChange={setId} />
//           {/* <ErrorMessageWrap>올바른 아이디를 입력해주세요</ErrorMessageWrap> */}
//           {isSignUp && (
//             <div>
//               닉네임
//               <Input
//                 placeholder="닉네임(3~15자리)"
//                 value={nickname}
//                 onChange={setNickname}
//               />
//             </div>
//           )}
//           비밀번호
//           <Input
//             placeholder={
//               isSignUp
//                 ? "비밀번호(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)"
//                 : "비밀번호"
//             }
//             type="password"
//             value={pw}
//             onChange={setPw}
//           />
//           {/* <ErrorMessageWrap>올바른 비밀번호를 입력해주세요</ErrorMessageWrap> */}
//         </InputWrap>
//         <CustomLink to={isSignUp ? "/login" : "/signup"}>
//           {isSignUp ? "로그인" : "회원가입"}
//         </CustomLink>
//         <Button onClick={onClickSignUpOrLogin}>
//           {isSignUp ? "회원가입" : "로그인"}
//         </Button>
//         <CustomLink to="/">홈으로 가기</CustomLink>
//       </Form>
//     </Wrap>
//   );
// }

// export default SignForm;




// // import React from 'react';
// // import { Wrapper, Title, Inputs, Form, Input, Button, CustomLink } from "./Common";
// // import { useNavigate } from "react-router-dom";
// // import { login } from "../apis/login";
// // import { idCheck } from "../../shared/Id";
// // import { useForm } from "../hooks/useForm"
// // import { signUp } from "../apis/signUp";
// // import { passwordCheck } from "../../shared/Password";
// // import { nicknameCheck } from "../../shared/Nickname"
// // import PropTypes from 'prop-types';

// // function SignForm(props) {
// //     const [id, setId] = useForm("");
// //     const [pw, setPw] = useForm("");
// //     const [nickname, setNickname] = useForm("");
// //     const navigate = useNavigate();

// //     // const setIsUserValid = useBearStore((store)=> state.setIsUserValid);

// //     const onClickLogin = async () => {
// //         // const dbId = "hh2ih@gmail.com"
// //         // const dbPw = "1aaaaaQ"

// //         if(id === "" || pw === "") {
// //             alert('아이디(메일주소)와 비밀번호를 모두 입력하세요.')
// //             return;
// //         }
// //         if(!idCheck(id)) {
// //             alert("올바른 아이디(메일주소) 형식을 입력하세요.")
// //             return;
// //         }
// //         // if(id === dbId && pw === dbPw) {
// //         //     // setIsUserValid(true);
// //         //     //true
// //         //     // "/"
// //         // }
// //         await login(id, pw, navigate);
// //     }

// //     const onClickSignUp = async () => {
// //       if (id === "" || pw === "" || nickname === "") {
// //         alert('아이디, 비밀번호, 닉네임을 모두 입력해주세요.')
// //         return;
// //       }
// //       if(!idCheck(id)) {
// //         alert("올바른 아이디(메일주소) 형식을 입력하세요.")
// //         return;
// //       }
// //       if(!nicknameCheck(nickname)) {
// //         alert("올바른 닉네임 형식(3~15자리)을 입력하세요.")
// //         return;
// //       }
// //       if(!passwordCheck(pw)) {
// //         alert("올바른 비밀번호 형식(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)을 입력하세요.")
// //         return;
// //       }

// //       await signUp(id, pw);
// //       navigate("/log-in");
// //       }

// //   return (
// //     <Wrapper>
// //         <Title>{props.route ? "로그인해유" : "회원가입"}</Title>
// //         <Form>
// //             <Inputs>
// //                 아이디
// //                 <Input
// //                 placeholder="아이디"
// //                 value={id}
// //                 onChange={setId}
// //                 />
// //                 닉네임
// //                 <Input
// //                 placeholder="닉네임(3~15자리)"
// //                 value={nickname}
// //                 onChange={setNickname}
// //                 />
// //                 비밀번호
// //                 <Input
// //                 placeholder="비밀번호(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)"
// //                 type="password"
// //                 value={pw}
// //                 onChange={setPw}
// //             />
// //             </Inputs>
// //             <Button onClick={props.route ? onClickLogin() : onClickSignUp() }>{props.route ? "로그인" : "회원가입"}</Button>
// //             <CustomLink
// //             onClick={() => {
// //                 props.route ? navigate("/sign-up") : navigate("/log-in");
// //             }}>{props.route ? "회원가입" : "로그인"}</CustomLink>

// //         </Form>
// //     </Wrapper>
// // )
// // }

// // export default SignForm;

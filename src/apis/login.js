import { instance } from "./axios";
import { setCookie } from "../cookies/cookies";
import { useMutation } from "@tanstack/react-query";

// export const login = async (id, pw, navigate) => {
//   try {
//     const result = await instance.post("/log-in", { email: id, password: pw });
//     console.log(result);
//     const { accessToken, refreshToken } = result.data;
//     localStorage.setItem("accessToken", accessToken);
//     setCookie("refreshToken", refreshToken);
//     alert("로그인에 성공했습니다.");
//     navigate("/");
//     return result.data;
//   } catch (error) {
//     if (error.response.status === 401) {
//       alert(error.response.data.message);
//     }
//     return error.response;
//   }
// };

export const login = async (user) => {
  try {
    const result = await instance
      .post("/log-in", { email: user.id, password: user.pw })
      .then((result) => result);
      console.log("result==>", result);
    return result;
  } catch (error) {
    console.log(error.result);
  }
};

// const { accessToken, refreshToken } = result.data;
// localStorage.setItem("accessToken", accessToken);
// setCookie("refreshToken", refreshToken);
// alert("로그인에 성공했습니다.");
// navigate("/");

// const loginMutation = useMutation({
//   mutationFn: loginUser,
//   onSuccess: (data) => {
//   const refreshToken = data.data.refreshToken;
//   const accessToken = data.headers.authorization;
//   if (data.status === 200) {
//   setLocalStorage(accessToken);
//   setCookie("refreshToken", refreshToken);
//   localStorage.setItem("username", data.data.username);
//   // setLocalStorage(data.data.username);
//   alert(
//   `${data.data.username}님 로그인 성공하였습니다. 메인페이지로 이동합니다!`
//   );
//   navigate("/main");
//   }
//   },
//   onError: (error) => {
//   console.log("로그인 실패 : ", error);
//   alert("로그인에 실패하였습니다!");
//   },
//   });

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (email.trim() !== "" && !validateEmail(email)) {
//     alert("유효한 이메일 주소를 입력하세요.");
//     }

//     if (password.trim() !== "" && !validatePassword(password)) {
//     alert(
//     "비밀번호는 영어 대소문자, 특수문자 !@#$%^&*()_만 사용하여 8~15자로 입력하세요."
//     );
//     }

// if (islogin) {
// // 로그인 처리
// loginMutation.mutate(userInfo);
// } else {
// // 회원가입 처리
// signupMutation.mutate(newUserInfo);
// }
// };

// loginMutation.mutate(userInfo);
// loginMutation.mutate(userInfo);

//     useMutation({
//       mutationFn: addTodo,
//       onSuccess: async () => {
//       console.log("I'm first!")
//       },
//       onSettled: async () => {
//       console.log("I'm second!")
//       },
//       })

////////////////////////////////

// export const login = () => {
//   return useMutation(async (id, pw) => {
//     const result = await instance.post("/log-in", { email: id, password: pw });
//     return result.data;
//   }, {
//     onError: (error) => {
//       if (error.response?.status === 401) {
//         throw new Error(error.response.data.message);
//       } else {
//         throw new Error('로그인에 실패했습니다.');
//       }
//     },
//     onSuccess: (data) => {
//       const { accessToken, refreshToken } = data;
//       localStorage.setItem('accessToken', accessToken);
//       setCookie('refreshToken', refreshToken);
//     }
//   });
// };

// const loginMutation = useMutation({
//   mutationFn: Login,
//   onSuccess: (data) => {
//   const refreshToken = data.data.refreshToken;
//   const accessToken = data.headers.authorization;
//   if (data.status === 200) {
//   setLocalStorage(accessToken);
//   setCookie("refreshToken", refreshToken);
//   // alert(`${data.data.nickname}님 로그인 성공하였습니다.`);
//   navigate("/");
//   }
//   },
//   onError: (error) => {
//   console.log("로그인 실패 : ", error);
//   alert("로그인에 실패하였습니다!")
//   },
//   });
//   loginMutation.mutate(userInfo);

// import { useMutation } from 'react-query';
// import { instance } from './axiosInstance';

// export const useLogin = () => {
//   return useMutation(async ({ id, pw }) => {
//     const result = await instance.post('/log-in', { email: id, password: pw });
//     return result.data;
//   }, {
//     onError: (error) => {
//       if (error.response?.status === 401) {
//         throw new Error(error.response.data.message);
//       } else {
//         throw new Error('로그인에 실패했습니다.');
//       }
//     },
//     onSuccess: (data) => {
//       const { accessToken, refreshToken } = data;
//       localStorage.setItem('accessToken', accessToken);
//       setCookie('refreshToken', refreshToken);
//       alert('로그인에 성공했습니다.');
//       navigate('/');
//     }
//   });
// };

// import { useMutation } from 'react-query';
// import { instance, setCookie } from './api'; // 수정된 부분: 인스턴스 및 쿠키 관련 함수 가져오기

// export const useLogin = () => {
//   return useMutation(async ({ id, pw }) => {
//     try {
//       const result = await instance.post('/log-in', { email: id, password: pw });
//       console.log(result);
//       const { accessToken, refreshToken } = result.data;
//       localStorage.setItem('accessToken', accessToken);
//       setCookie('refreshToken', refreshToken); // 수정된 부분: setCookie 함수 사용
//       alert('로그인에 성공했습니다.');
//       return result.data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         alert(error.response.data.message);
//       }
//       return error.response;
//     }
//   });
// };

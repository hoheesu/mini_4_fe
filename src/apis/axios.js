import axios from "axios";

const token = localStorage.getItem("accessToken");

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    authorization: token,
  },
});

// ! Refresh토큰이 생성 되면 사용할 예정
// authInstance.interceptors.response.use(
//   (res) => res, //성공한 경우 걍 결과(result) 내보내줌ㅇㅇ
//   async (error) => {
//     //await가 문제니까 async 붙여주기
//     if (error.response.status === 401) {
//       //토큰이 만료된 경우(instance가 실패했을 경우)
//       const { accessToken, refreshToken } = await getNewRefreshToken();
//       error.config.headers.Authorization = accessToken;
//       localStorage.setItem("accessToken", accessToken); //localStorage update
//       localStorage.setItem("refreshToken", refreshToken); //쿠키 update
//       return (await instance.get(error.config.url, error.config)).data;
//     }
//   },
// );


// const loginMutation = useMutation({
//   mutationFn: axios,
//   onSuccess: (data) => {
//   const refreshToken = data.data;
//   const accessToken = data.headers.authorization;
//   if (data.status === 200) {
//   setLocalStorage(accessToken);
//   setCookie("refreshToken", refreshToken);
//   // alert(`${data.data}님 로그인 성공하였습니다. 메인페이지로 이동합니다!`);
//   navigate("/main");
//   }
//   },
//   onError: (error) => {
//   console.log("로그인 실패 : ", error.status);
//   },
//   });
//   loginMutation.mutate(userInfo);
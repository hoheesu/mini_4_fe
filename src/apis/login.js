import { instance } from "./axios";
import { setCookie } from "../cookies/cookies";

export const login = async (id, pw, navigate) => {
  try {
    const result = await instance.post("/log-in", { email: id, password: pw });
    console.log(result);
    const { accessToken, refreshToken } = result.data;
    localStorage.setItem("accessToken", accessToken);
    setCookie("refreshToken", refreshToken);
    alert("로그인에 성공했습니다.");
    navigate("/");
    return result.data;
  } catch (error) {
    if (error.response.status === 401) {
      alert(error.response.data.message);
    }
    return error.response;
  }
};


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
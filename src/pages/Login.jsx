// import React from "react";
// import SignForm from "./components/SignForm";


// function Login() {
//   return (
//     <>
//       <SignForm route="/log-in" />
//     </>
//   );
// }

// export default Login;
















import React from "react";
import { Wrapper, Title, Inputs, Form, Input, Button, CustomLink } from "./components/Common";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { idCheck } from "../shared/Id";
import { useForm } from "../hooks/useForm";

function Login () {
    const [id, onChangeId] = useForm("");
    const [pw, onChangePw] = useForm("");
    const navigate = useNavigate();

    // const setIsUserValid = useBearStore((store)=> state.setIsUserValid);

    const onClickLogin = async () => {
        // const dbId = "hh2ih@gmail.com"
        // const dbPw = "1aaaaaQ"
        
        if(id === "" || pw === "") {
            alert('아이디(메일주소)와 비밀번호를 모두 입력하세요.')
            return;
        }
        if(!idCheck(id)) {
            alert("올바른 아이디(메일주소) 형식을 입력하세요.")
            return;
        }
        // if(id === dbId && pw === dbPw) {
        //     // setIsUserValid(true);
        //     //true
        //     // "/"
        // }
        await login(id, pw, navigate);
    }


    return (
    <Wrapper>
        <Title></Title>
        <Form>
        <Inputs>아이디
            <Input
            placeholder="메일주소"
            value={id}
            onChange={onChangeId}
            />
            비밀번호
            <Input
            placeholder="비밀번호(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)"
            type="password"
            value={pw}
            onChange={onChangePw}
            />
        </Inputs>
        <Button onClick={onClickLogin}>로그인</Button>
        <CustomLink to="/sign-up">회원가입</CustomLink>
        <CustomLink to="/">홈으로 가기</CustomLink>
        </Form>
    </Wrapper>
    );
}

export default Login;

// 로그인 아이디 비번
// {
//     "email" : "hh2ih@gmail.com",
//     "password" : "1aaaaaQ"
//     }

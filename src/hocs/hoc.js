import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent, option) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();

    // option = true = 로그인 한사람

    useEffect(() => {
      (async () => {
        const result = await localStorage.getItem("accessToken");
        if (result && option) {
          // => 회원가입, 로그인를 볼 수 없게
          // true + true = true;
          navigate("/");
        }
        if (!result && !option) {
          // => 로그인을 안한 사람이 글 조회를 할 수 없게
          // false + false
          alert("로그인을 하셔야 접근 가능합니다.");
          navigate("/login");
        }
      })();
    }, []);
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;

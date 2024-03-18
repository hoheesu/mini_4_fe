import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeCookie, getCookie } from "../../cookies/cookies";
import styled from "styled-components";
import pickmypick from "../../assets/pickmypick.svg";

function Header() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  const onClickLogoutHandler = () => {
    localStorage.removeItem("accessToken");
    removeCookie("refreshToken");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <HeaderFlex>
        <li>
          <button onClick={handleBackButton}>🔙</button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <ImageStyle src={pickmypick} alt="로고사진" />
          </button>
        </li>

        <li>
          {localStorage.getItem("accessToken") ? (
            <>
              <button onClick={onClickLogoutHandler}>로그아웃</button>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </li>
      </HeaderFlex>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;

  background-color: #fff;
  z-index: 99;
`;
const HeaderFlex = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;
const ImageStyle = styled.img`
  height: 108px;
`;

export default Header;

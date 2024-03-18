import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <Link to="/vote/create">작성하기</Link>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  position: fixed;
  height: 50px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #ccc;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default Footer;

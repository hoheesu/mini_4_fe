import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  const navigate = useNavigate();
  const handleGoToMainButton = () => {
    navigate("/");
  };
  return (
    <FooterContainer>
      <nav>
        <ul>
          <li>
            <button onClick={handleGoToMainButton}>PickMyPick🏠</button>
          </li>
        </ul>
      </nav>
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

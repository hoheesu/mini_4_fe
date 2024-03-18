import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #f7f7f7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  margin-top: 87px;
  font-size: 26px;
  font-weight: bold;
  color: #262626;
`;

export const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`;

export const InputTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #262626;
`;

export const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border: 1px solid #e2e0e0;
  &:focus-within {
    border: 1px solid #9e30f4;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
  &::placeholder {
    color: #dadada;
  }
`;

export const BottomButton = styled.div`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: bold;
  border-radius: 64px;
  background-color: #9e30f4;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:disabled {
    background-color: #dadada;
    color: white;
  }
`;

export const CustomLink = styled(Link)`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: bold;
  border-radius: 64px;
  background-color: #9e30f4;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:visited {
    width: 100%;
    border: none;
    height: 48px;
    border-radius: 64px;
    font-weight: bold;
    color: white;
    background-color: #9e30f4;
    cursor: pointer;
    display: flex;
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
`;

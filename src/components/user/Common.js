import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0px;
  text-decoration: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  padding: 12px;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-direction: column;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight:600;
  margin-bottom:30px;
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
`;

export const Input = styled.input`
  width: 98.8%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 14px;
  border: 1px solid rgb(238, 238, 238);
`;

export const Button = styled.button`
  background-color: grey;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  padding-block: 1px;
  padding-inline: 6px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  flex-shrink: 0;
  border: 1px solid rgb(238, 238, 238);
  height: 46px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
`;

export const CustomLink = styled(Link)`
  background-color: grey;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  padding-block: 1px;
  padding-inline: 6px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  flex-shrink: 0;
  border: 1px solid rgb(238, 238, 238);
  height: 42px;
  border-radius: 8px;
  cursor: pointer;
  width: 99.1%;
  &:visited {
    color: white;
    background-color: grey;
    text-decoration: none;
    border: none;
    border-radius: 10px;
  }
`;
import { styled } from "styled-components";
import { Link } from "react-router-dom";

// export const Wrap = styled.div`
//   box-sizing: border-box;
//   margin: 0px;
//   text-decoration: none;
//   outline: none;
//   font-family: "Noto Sans KR", sans-serif;
//   padding: 12px;
// `

// export const InputWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   flex-direction: column;
// `;

// export const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   gap: 20px;
// `;

// export const Title = styled.div`
//   font-size: 40px;
//   font-weight:600;
//   margin-bottom:30px;
//   display: flex;
//   flex-direction: column;
//   justify-items: flex-end;
// `;

// export const Input = styled.input`
//   width: 98.8%;
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   box-sizing: border-box;
//   height: 46px;
//   width: 100%;
//   outline: none;
//   border-radius: 8px;
//   padding: 0px 12px;
//   font-size: 14px;
//   border: 1px solid rgb(238, 238, 238);
// `;

// export const Button = styled.button`
//   background-color: grey;
//   color: white;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   padding-block: 1px;
//   padding-inline: 6px;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
//   flex-direction: row;
//   flex-shrink: 0;
//   border: 1px solid rgb(238, 238, 238);
//   height: 46px;
//   border-radius: 8px;
//   cursor: pointer;
//   width: 100%;
//   font-size: 16px;
// `;

// export const CustomLink = styled(Link)`
//   background-color: grey;
//   color: white;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   padding-block: 1px;
//   padding-inline: 6px;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
//   flex-direction: row;
//   flex-shrink: 0;
//   border: 1px solid rgb(238, 238, 238);
//   height: 42px;
//   border-radius: 8px;
//   cursor: pointer;
//   width: 99.1%;
//   &:visited {
//     color: white;
//     background-color: grey;
//     text-decoration: none;
//     border: none;
//     border-radius: 10px;
//   }
// `;

export const Page = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #F7F7F7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const TitleWrap = styled.div`
  margin-top: 87px;
  font-size: 26px;
  font-weight: bold;
  color: #262626;
`

export const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`

export const InputTitle = styled.div`
  font-size: 12px;
font-weight: 600;
color: #262626;
`

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
`

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
`

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
`

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
`

export const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`
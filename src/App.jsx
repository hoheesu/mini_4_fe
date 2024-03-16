import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
  // const isUserValid = useBearStore((state) => state.isUserValid); 생각해보니까 로그인 안해도 조회 가능하게 하자고 했던거같음
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const isUserValid = useBearStore((state) => state.isUserValid); 생각해보니까 로그인 안해도 조회 가능하게 하자고 했던거같음
  return (
    <>
      {/* {isUserValid ? <Outlet /> : <Navigate to={"log-in"}/>} */}
      <Header />
      <Outlet />
    </>
  );
}

export default App;

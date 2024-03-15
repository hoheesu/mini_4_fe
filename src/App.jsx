import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

function App() {
  // const isUserValid = useBearStore((state) => state.isUserValid); 생각해보니까 로그인 안해도 조회 가능하게 하자고 했던거같음
  return (
    <div>
      {/* {isUserValid ? <Outlet /> : <Navigate to={"log-in"}/>} */}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;

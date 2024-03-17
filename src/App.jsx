import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import GlobalStyle from "./components/styles/GlobalStyle";
import Footer from "./components/layout/Footer";
import { Page } from "./components/user/Common";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageStyle>
        <Header />
        <Outlet />
        <Footer />
      </PageStyle>
    </>
  );
}
const PageStyle = styled.section`
  margin: 0 auto;
  max-width: 500px;
  padding: 60px 0;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export default App;

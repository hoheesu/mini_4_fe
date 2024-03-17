import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import GlobalStyle from "./components/styles/GlobalStyle";
import Footer from "./components/layout/Footer";
import styled from "styled-components";

function App() {
  const location = useLocation();
  const hideHeaderPages = ["/login", "/signup"];

  const shouldHideHeader = () => {
    return hideHeaderPages.includes(location.pathname);
  };

  return (
    <>
      <GlobalStyle />
      <PageStyle>
        {!shouldHideHeader() && <Header />}
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

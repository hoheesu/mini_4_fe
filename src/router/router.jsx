import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import VoteDetail from "../pages/VoteDetail";
import VoteCreate from "../pages/VoteCreate";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Comments from "../components/comments/Comments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/vote/detail/:id",
        element: <VoteDetail />,
      },
      {
        path: "/vote/create",
        element: <VoteCreate />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
    ],
  },
]);

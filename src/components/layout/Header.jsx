import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Header;

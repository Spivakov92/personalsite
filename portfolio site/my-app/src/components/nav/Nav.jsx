import React from "react";
import "./nav.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlinePhone,
} from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <AiOutlineBook />
      </a>
      <a href="#contacts">
        <AiOutlinePhone />
      </a>
    </nav>
  );
};

export default Nav;

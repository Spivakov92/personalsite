import React from "react";
import { useState , useEffect } from "react";
import "./nav.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlinePhone,
} from "react-icons/ai";
import "../../variables.scss";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");


const setColor = (bgColor , bgColorVr ,colorPr, colorPrVr )=>{
  document.documentElement.style.setProperty('--bg', bgColor);
  document.documentElement.style.setProperty('--bg-vr', bgColorVr);
  document.documentElement.style.setProperty('--clr-pr', colorPr);
  document.documentElement.style.setProperty('--clr-pr-vr', colorPrVr);
}

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <AiOutlinePhone />
      </a>
      <button onClick={()=>setColor('#fefae0' , '#283618' , '#606c38' , '#dda15e')}>color</button>
    </nav>
  );
};

export default Nav;

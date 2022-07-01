import React from "react";
import CTA from './CTA'
import "./header.scss";
import ME from '../../assets/myself.jpg'
import HeaderSocials from'./HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Arsen Spivakov</h1>
        <h5 className="text-light">Junior front-end developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="picture of myself" />
        </div>

        <a href="#contacts" className="scroll__down">Scroll down</a>
      </div>
      
    </header>
  );
};

export default Header;

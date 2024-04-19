import React, { useState } from "react";

import Logo from "../header/Logo";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMeny = () => {
    setIsMenuActive(true);
  };

  return (
    <header id="header" role="'banner">
      <Logo />
      <Menu />
      <Sns />
    </header>
  );
};

export default Header;

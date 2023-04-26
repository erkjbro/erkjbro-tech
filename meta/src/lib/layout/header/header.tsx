import { type FC, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import Logo from "./assets/ejb-black-logo-v2.png";
import { NavLinks, SiteBrand, StyledNav, StyledNavLink } from "./header.styled";

const Header: FC = () => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => (
    console.log("Current theme: ", themeContext)
  ), [themeContext]);

  return (
    <StyledNav>
      <SiteBrand to="/">
        <span>
          <img src={Logo} width="40" height="40" alt="logo" />
        </span>
      </SiteBrand>
      <NavLinks>
        <li>
          <StyledNavLink to="/">
            Portfolio
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            About Me
          </StyledNavLink>
        </li>
      </NavLinks>
    </StyledNav>
  );
};

export default Header;

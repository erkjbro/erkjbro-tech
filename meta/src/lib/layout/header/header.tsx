import { type FC, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { StyledContext } from "@erkjbro-tech/shared/ui";
import Logo from "./assets/ejb-black-logo-v2.png";
import { NavLinks, SiteBrand, StyledNav, StyledNavLink, ThemeToggle } from "./header.styled";

const Header: FC = () => {
  const themeContext = useContext(ThemeContext);
  const { activeTheme, ThemeOptions, updateActiveTheme } = useContext(StyledContext);

  useEffect(() => (
    console.log("Current theme: ", themeContext)
  ), [themeContext]);

  const handleThemeUpdate = () => updateActiveTheme(
    activeTheme === ThemeOptions.Dark ? (
      ThemeOptions.Light) : (ThemeOptions.Dark)
  );

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

      <ThemeToggle htmlFor={"darkmode-toggle"}>
        Dark Mode
        &nbsp;
        <input
          type={"checkbox"}
          id={"darkmode-toggle"}
          checked={activeTheme === ThemeOptions.Dark}
          onChange={handleThemeUpdate}
        />
      </ThemeToggle>
    </StyledNav>
  );
};

export default Header;

import { FC } from "react";

import Logo from "./assets/ejb-black-logo-v2.png";
import { HomeLink, NavRight, StyledLink, StyledSitenav } from "./sitenav.styles";

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface SitenavProps {
}

export const Sitenav: FC<SitenavProps> = (props) => {
  return (
    <StyledSitenav>
      <HomeLink to="/">
        <span>
          <img src={Logo} alt="logo" width="40px" />
        </span>
      </HomeLink>
      <NavRight>
        <li>
          <StyledLink to="/">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/personal">
            About Me
          </StyledLink>
        </li>
      </NavRight>
    </StyledSitenav>
  );
};

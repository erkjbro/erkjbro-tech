import { type FC } from "react";

import Logo from "./assets/ejb-black-logo-v2.png";
import { SitenavBrand, SitenavLinks, StyledNavLink, StyledSitenav } from "./sitenav.styled";

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface SitenavProps {
}

const Sitenav: FC<SitenavProps> = (props) => {
  return (
    <StyledSitenav>
      <SitenavBrand to="/">
        <span>
          <img src={Logo} alt="logo" width="40px" />
        </span>
      </SitenavBrand>
      <SitenavLinks>
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
      </SitenavLinks>
    </StyledSitenav>
  );
};

export default Sitenav;

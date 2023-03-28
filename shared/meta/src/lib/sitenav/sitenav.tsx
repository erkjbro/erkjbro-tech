import { type FC } from "react";

import Logo from "./assets/ejb-black-logo-v2.png";
import { SitenavBrand, SitenavLinks, StyledLink, StyledSitenav } from "./sitenav.styled";

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
          <StyledLink to="/">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/personal">
            About Me
          </StyledLink>
        </li>
      </SitenavLinks>
    </StyledSitenav>
  );
};

export default Sitenav;

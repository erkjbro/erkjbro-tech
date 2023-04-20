import type { FC, ReactNode } from "react";

import { StyledFooter, FooterContent} from "./footer.styled";
import { LINK_DATA } from "./footer.data";

/* eslint-disable-next-line */
export interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  return (
    <StyledFooter>
      <FooterContent>
        {LINK_DATA.map((fields, i) => (
          <HtmlLink key={i} {...fields} />
        ))}
      </FooterContent>
    </StyledFooter>
  );
}

interface HtmlLinkProps {
  children?: ReactNode;
  href: string;
  text: string;
}

const HtmlLink: FC<HtmlLinkProps> = ({ href, text, children }) => {
  const aProps = isValidHttpUrl(href) ? ({
    href,
    hrefLang: "en-US",
    target: "_blank",
    rel: "noopener noreferrer"
  }) : ({
    href,
    target: "_blank"
  });

  return (
    <li><a {...aProps}>
      {children ?? text}
    </a></li>
  );
};

const isValidHttpUrl = (val: string): boolean => {
  const re = new RegExp("^(http|https)://", "i");
  return re.test(val);
};

export default Footer;

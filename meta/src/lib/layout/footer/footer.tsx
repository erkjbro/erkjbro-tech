import type { FC, ReactNode } from "react";

import { StyledFooter, FooterContent} from "./footer.styled";
import { ContactFields } from "@erkjbro-tech/shared/apis";

export interface FooterProps {
  links: ContactFields[];
}

const Footer: FC<FooterProps> = ({ links }) => {
  return (
    <StyledFooter>
      <FooterContent>
        {links.map((fields, i) => (
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

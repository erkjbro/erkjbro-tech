import { FC, ReactNode } from "react";
import { Hr, Main, PortfolioContainer, StyledList } from "./portfolio-styled";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

export const Portfolio: FC<PortfolioProps> = (props) => {
  // TODO: Retrieve link data from Contentful.
  const linkData = [
    { href: "mailto:erkjbro@erikjbrown.tech", text: "Email" },
    { href: "https://www.linkedin.com/in/erkjbro/", text: "LinkedIn" },
    { href: "https://github.com/erkjbro", text: "GitHub" },
    { href: "https://twitter.com/erkjbro", text: "Twitter" },
    { href: "https://www.upwork.com/fl/erkjbro", text: "Upwork" }
  ];

  return (
    <PortfolioContainer>
      <div>
        <h1>Erik J Brown Tech LLC</h1>
      </div>
      <Main>
        <code>Working on an update to pull homepage data from Contentful...</code>
        <Hr />
        <StyledList>
          {linkData.map((link, i) => (
            <HtmlLink href={link.href} key={i}>{link.text}</HtmlLink>
          ))}
        </StyledList>
      </Main>
    </PortfolioContainer>
  );
};

interface HtmlLinkProps {
  children: ReactNode;
  href: string;
}

const HtmlLink: FC<HtmlLinkProps> = ({ href, children }) => {
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
      {children}
    </a></li>
  );
};

const isValidHttpUrl = (val: string): boolean => {
  const re = new RegExp("^(http|https)://", "i");
  return re.test(val);
};

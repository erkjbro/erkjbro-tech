import type { FC, ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import usePortfolioStore from "./portfolio-store";
import { ContactList, PortfolioContent, StyledPortfolio } from "./portfolio.styled";
import { AsyncWrapper } from "@erkjbro-tech/shared/meta";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

const Portfolio: FC<PortfolioProps> = (props) => {
  const [status, portfolio, links] = usePortfolioStore();

  return (
    <AsyncWrapper status={status}>
      <StyledPortfolio>
        <div>
          <h1>{portfolio.header}</h1>
        </div>
        <PortfolioContent>
          <ReactMarkdown>
            {portfolio.introduction}
          </ReactMarkdown>
          <ContactList>
            {links.map((fields, i) => (
              <HtmlLink key={i} {...fields} />
            ))}
          </ContactList>
          <code style={{ textAlign: "center" }}>
            Last updated: {portfolio.title}
          </code>
        </PortfolioContent>
      </StyledPortfolio>
    </AsyncWrapper>
  );
};

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

export default Portfolio;

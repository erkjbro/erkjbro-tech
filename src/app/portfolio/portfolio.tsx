import { FC, ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import usePortfolioStore from "./portfolio-store";
import { ContactList, PortfolioContent, StyledPortfolio } from "./portfolio.styled";
import { Loader } from "../app";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

const Portfolio: FC<PortfolioProps> = (props) => {
  const {
    portfolio,
    links,
    loading,
    error
  } = usePortfolioStore();

  // TODO: Setup Suspense (Loading) and Error Boundary wrappers for
  //  pages with async content.
  return (
    <StyledPortfolio>
      <div>
        <h1>{portfolio.header}</h1>
      </div>
      {/*TODO: Display error as snackbar notification. */}
      {(!loading && error) ?? <p>{error}</p>}
      {loading ? <Loader /> : (
        <PortfolioContent>
          <ReactMarkdown>
            {portfolio.introduction}
          </ReactMarkdown>
          <ContactList>
            {links.map(({ href, text }, i) => (
              <HtmlLink href={href} key={i}>{text}</HtmlLink>
            ))}
          </ContactList>
          <code style={{ textAlign: "center" }}>
            Last edited on {portfolio.title}
          </code>
        </PortfolioContent>
      )}
    </StyledPortfolio>
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

export default Portfolio;

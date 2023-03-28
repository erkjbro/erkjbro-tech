import { type FC, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import usePortfolioStore, { FetchStatus } from "./portfolio-store";
import { ContactList, PortfolioContent, StyledPortfolio } from "./portfolio.styled";
import { Loader } from "../app";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

const Portfolio: FC<PortfolioProps> = (props) => {
  const [status, portfolio, links] = usePortfolioStore();

  // TODO: Setup Suspense (Loading) and Error Boundary wrappers for
  //  pages with async content.
  return (
    <StyledPortfolio>
      <div>
        <h1>{portfolio.header}</h1>
      </div>
      {/*TODO: Display error as snackbar notification. */}
      {status === FetchStatus.ERROR && <p>Oops! Something went wrong.</p>}
      {status === FetchStatus.LOADING && <Loader />}
      {status === FetchStatus.SUCCESS && (
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
            Last edited on {portfolio.title}
          </code>
        </PortfolioContent>
      )}
    </StyledPortfolio>
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

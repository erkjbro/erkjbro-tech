import { type FC, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import usePortfolioStore from "./portfolio-store";
import { PortfolioContent, StyledPortfolio } from "./portfolio.styled";
import { AsyncWrapper } from "@erkjbro-tech/shared/meta";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

const Portfolio: FC<PortfolioProps> = (props) => {
  const [status, portfolio] = usePortfolioStore();

  useEffect(() => {
    document.title = `Erik J Brown | ${portfolio.title}`
  }, [portfolio.title]);

  return (
    <AsyncWrapper status={status} dataToResolve={portfolio}>
      <StyledPortfolio>
        <div>
          <h1>{portfolio.header}</h1>
        </div>
        <PortfolioContent>
          <ReactMarkdown>
            {portfolio.body}
          </ReactMarkdown>
        </PortfolioContent>
      </StyledPortfolio>
    </AsyncWrapper>
  );
};

export default Portfolio;

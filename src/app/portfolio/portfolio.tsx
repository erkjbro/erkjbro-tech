import { type FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { PortfolioContent, StyledPortfolio } from "./portfolio.styled";
import type { StaticPageFields } from "@erkjbro-tech/shared/apis";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

const Portfolio: FC<PortfolioProps> = (props) => {
  const data = useLoaderData() as { payload: StaticPageFields};

  return (
    <StyledPortfolio>
      <Suspense fallback={<div>Loading...</div>}>
        <Await
          resolve={data.payload}
          errorElement={<div>Failed to load portfolio</div>}
        >
          {(portfolio) => (
            <>
              <div>
                <h1>{portfolio.header}</h1>
              </div>
              <PortfolioContent>
                <ReactMarkdown>
                  {portfolio.body}
                </ReactMarkdown>
              </PortfolioContent>
            </>
          )}
        </Await>
      </Suspense>
    </StyledPortfolio>
  );
};

export default Portfolio;

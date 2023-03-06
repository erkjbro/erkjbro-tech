import { FC } from 'react';
import { Hr, Main, PortfolioContainer } from './portfolio-styled';

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

export const Portfolio: FC<PortfolioProps> = (props) => {
  return (
    <PortfolioContainer>
      <div>
        <h1>Erik J Brown Tech LLC</h1>
      </div>
      <Main>
        <code>Working on an update to pull homepage data from Contentful...</code>
        <Hr />
        <ul style={{ padding: '0', display: 'flex', justifyContent: 'space-between' }}>
          <li><a href="mailto:erkjbro@erikjbrown.tech">E-Mail</a></li>
          <li><a href="https://www.linkedin.com/in/erkjbro/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/erkjbro" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com/erkjbro" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.upwork.com/fl/erkjbro" target="_blank" rel="noopener noreferrer">Upwork</a></li>
        </ul>
      </Main>
    </PortfolioContainer>
  );
};

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 800px;
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Hr = styled.hr`
  margin: 2rem 0;
  color: black;
`;

/* eslint-disable-next-line */
export interface PortfolioProps {}

export function Portfolio(props: PortfolioProps) {
  return (
    <Container>
      <div>
        <h1>Erik J Brown Tech LLC</h1>
      </div>
      <Main>
        <code>Working on an update to pull homepage data from Contentful...</code>
        <Hr />
        <ul style={{ padding: '0', display: 'flex', justifyContent: 'space-between'}}>
          <li><a href="mailto:erkjbro@erikjbrown.tech">E-Mail</a></li>
          <li><a href="https://www.linkedin.com/in/erkjbro/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/erkjbro" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com/erkjbro" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.upwork.com/fl/erkjbro" target="_blank" rel="noopener noreferrer">Upwork</a></li>
        </ul>
      </Main>
    </Container>
  );
}

export default Portfolio;

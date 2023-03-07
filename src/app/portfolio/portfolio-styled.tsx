import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  max-width: 800px;
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Hr = styled.hr`
  margin: 2rem 0 1rem 0;
  color: black;
`;

export const StyledList = styled.ul`
  margin: 0.5rem;
  padding: 0.5rem 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: fit-content;
  
  li {
    display: flex;
    align-content: center;
  }
  
  li a {
    display: flex;    
    padding: 0.2rem 0.4rem;
    border: 2px solid transparent;
    align-items: center;
    color: #11114a;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    
    &:hover {
      border: 2px solid #11114a;
      border-radius: 10px;
    }
  }
`;

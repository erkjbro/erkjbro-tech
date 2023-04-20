import styled from 'styled-components';

export const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioContent = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  
  @media (min-width: 480px) {
    margin: 0 2rem;
  }
  
  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 5rem;
  }
  
  p a {
    text-decoration: underline;
    color: ${({ theme }) => theme.primary}; 
    
    &:hover, &:focus {
      text-decoration: none;
      text-transform: capitalize;
      color: ${({ theme }) => theme.background};
    }
  }
`;

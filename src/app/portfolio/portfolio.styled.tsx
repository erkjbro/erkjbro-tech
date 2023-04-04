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
    color: #11114a;
    
    &:hover, &:focus {
      text-decoration: none;
      text-transform: capitalize;
      color: blue;      
    }
  }
`;

export const ContactList = styled.ul`
  height: fit-content;  
  margin: 1.2rem 0.5rem;
  border-top: 2px solid #11114a;
  padding: 1rem 0.2rem 0.5rem 0.2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  

  @media (min-width: 480px) {
    flex-direction: row;
    text-align: center;
  }
  
  li {
    display: inherit;
    align-content: center;
  }
  
  li a {
    width: 100px;    
    display: inherit;    
    padding: 0.2rem 0.4rem;
    margin: 0.2rem 0;    
    border: 2px solid transparent;
    align-items: center;
    color: #11114a;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    
    &:hover, &:focus {
      border: 2px solid #11114a;
      border-radius: 10px;
    }
    
    @media (min-width: 480px) {
      width: fit-content;
    }
  }
`;

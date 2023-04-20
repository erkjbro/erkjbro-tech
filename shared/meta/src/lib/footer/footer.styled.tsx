import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 8rem;
  width: 100vw;
  margin: 0 1rem;  
  text-align: left;

  @media (min-width: 480px) {
    margin: 0 2rem;
  }

  @media (min-width: 768px) {
    max-width: calc(100vw - 10rem);
    margin: 0 5rem;
  }
`;

export const FooterContent = styled.ul`
  height: fit-content;  
  margin: 1.2rem 0.5rem;
  border-top: 2px solid ${({ theme }) => theme.primary}; 
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
    color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    
    &:hover, &:focus {
      border: 2px solid ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    
    @media (min-width: 480px) {
      width: fit-content;
    }
  }
`;

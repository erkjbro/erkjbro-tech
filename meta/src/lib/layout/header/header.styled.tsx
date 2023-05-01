import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 100vw;
  min-height: 2rem;
  padding: 0.6rem 4rem;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.8rem 2rem;
  }

  @media (min-width: 768px) {
    padding: 0.8rem 8rem;
  }
`;

export const NavLinks = styled.ul`
  display: inherit;
  list-style: none;
  min-width: 16rem;
  min-height: 3rem;
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  overflow: visible;


  @media (min-width: 480px) {
    justify-content: flex-end;
    width: 70%;    

    li {
      overflow: visible;
    }
  }

  li a {
    text-decoration: none;
    display: inline-flex;
    align-self: center;
    color: ${({ theme }) => theme.background};
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 1.2rem;

    &:hover, &:active, &.active {
      color: ${({ theme }) => theme.secondary};
    }
  }

  @keyframes push-up {
    0% {
      transform: translateY(0);
    }
    33% {
      transform: translateY(-1.5rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const ThemeToggle = styled.label`
  display: flex;
  min-width: fit-content;
  margin: 0 0.8rem;
  color: ${({ theme }) => theme.background};
  font-weight: bold;

  input {
    align-self: flex-end;
  }
  
  @media (min-width: 480px) {
    input {
      align-self: center;
    }
  }
`;

export const SiteBrand = styled(NavLink)`
  display: flex;
  justify-content: center;
  min-width: fit-content;

  span {
    display: flex;
    background-color: #e8e6e3;
    padding: 10px;
    border: 4px solid ${({ theme }) => theme.secondary};
    border-radius: 50%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:active, &.active {
    animation: none;

    @media (prefers-reduced-motion: no-preference) and (min-width: 480px) {
      animation: push-up 1s ease-out forwards;
    }
  }

  &:focus-visible {
    border-color: transparent;
    border-bottom: ${({ theme }) => theme.secondary};
  }           
`;

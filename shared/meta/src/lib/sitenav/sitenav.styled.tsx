import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSitenav = styled.nav`
  width: 100vw;
  min-height: 2rem;
  padding: 0.6rem 4rem;
  background-color: #11114a;
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

export const SitenavLinks = styled.ul`
  display: inherit;
  list-style: none;
  min-width: 16rem;
  min-height: 3rem;
  height: fit-content;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  overflow: visible;

  @media (min-width: 480px) {
    justify-content: flex-end;

    li {
      overflow: visible;
    }
  }

  li a {
    text-decoration: none;
    display: inline-flex;
    align-self: center;
    color: whitesmoke;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 1.2rem;

    &:hover, &:active, &.active {
      color: #e8ef3d;
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

export const SitenavBrand = styled(NavLink)`
  display: flex;
  justify-content: center;

  span {
    display: flex;
    background-color: whitesmoke;
    padding: 10px;
    border: 4px solid #e8ef3d;
    border-radius: 50%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:active, &.active {
    animation: push-up 1s ease-out forwards;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
  
  &:focus-visible {
    border-color: transparent;
    border-bottom: #e8ef3d;
  }
`;

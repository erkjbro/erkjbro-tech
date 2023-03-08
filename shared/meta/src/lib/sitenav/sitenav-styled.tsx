import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSitenav = styled.nav`
  width: 100vw;
  min-height: 3rem;
  padding: 0.4rem 4rem;
  background-color: #11114a;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
    padding: 0.8rem 2rem;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavLeft = styled.div`
  display: none;
  min-width: 16rem;
  height: 6rem;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    display: inherit;
  }
`;

export const NavRight = styled.ul`
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

  @media (min-width: 480px) {
    height: 6rem;
    justify-content: flex-end;

    li {
      overflow: visible;

      a {
        &:active, &.active {
          animation: push-up 1s ease-out forwards;
        }
      }
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

export const HomeLink = styled(NavLink)`
  background-color: #11114a;
  display: flex;
  justify-content: center;
  padding: 10px 0;

  a {
    margin: 10rem 0;
  }

  span {
    background-color: whitesmoke;
    padding: 10px;
    border: 4px solid #e8ef3d;
    border-radius: 50%;
    min-width: fit-content;
  }
`;

export const StyledLink = styled(NavLink)`
`;

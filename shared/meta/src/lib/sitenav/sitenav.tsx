import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './assets/ejb-black-logo-v2.png'

const StyledSitenav = styled.nav`
  width: 100vw;
  min-height: 3rem;
  padding: 0.8rem 2rem;
  background-color: #11114a;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0.4rem 4rem;
  }
`;

const NavLeft = styled.div`
  display: inherit;
  min-width: 16rem;
  height: 6rem;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavRight = styled.ul`
  display: inherit;
  list-style: none;
  min-width: 16rem;
  height: 6rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;

  a {
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
`;

const HomeLink = styled(NavLink)`
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

/* eslint-disable-next-line */
export interface SitenavProps {
}

export const Sitenav: React.FC<SitenavProps> = (props) => {
  return (
    <StyledSitenav>
      <NavLeft />
      <HomeLink to="/">
        <span>
          <img src={Logo} alt="logo" width="50px" />
        </span>
      </HomeLink>
      <NavRight>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/personal">
            About Me
          </NavLink>
        </li>
      </NavRight>
    </StyledSitenav>
  );
}

export default Sitenav;

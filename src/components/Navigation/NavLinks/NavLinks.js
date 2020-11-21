import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => (
  <ul className="nav-links">
    <li>
      <NavLink to="/" exact>HOME</NavLink>
    </li>
  </ul>
);

export default NavLinks;

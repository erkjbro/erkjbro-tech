import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = () => (
  <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Home</NavLink>
    </li>
    <li>
      <NavLink to="/tech" exact>Tech</NavLink>
    </li>
  </ul>
);

export default NavLinks;

import { NavLink } from 'react-router-dom';
import styles from './sitenav.module.css';
import Logo from './assets/ejb-black-logo-v2.png'

/* eslint-disable-next-line */
export interface SitenavProps {
}

export function Sitenav(props: SitenavProps) {
  return (
    <nav className={styles['container']}>
      <NavLink to="/" className={styles['home-link']}>
        <span>
          <img src={Logo} alt="logo" width="50px" />
        </span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" className={styles['link']}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/personal" className={styles['link']}>
            About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sitenav;

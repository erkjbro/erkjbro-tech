import { NavLink } from 'react-router-dom';
import styles from './sitenav.module.css';

/* eslint-disable-next-line */
export interface SitenavProps {
}

export function Sitenav(props: SitenavProps) {
  return (
    <nav className={styles['container']}>
      <NavLink to="/" className={styles['link']}>
        Home
      </NavLink>
      <ul>
        <li>
          <NavLink to="/personal">
            About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sitenav;

import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../../UIElements/Backdrop/Backdrop';
import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import ejbBlackLogo from '../../../assets/images/ejb-black-logo-v2.png';
import './MainNavigation.scss';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => setDrawerIsOpen(true);
  const closeDrawerHandler = () => setDrawerIsOpen(false);

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer
        show={drawerIsOpen}
        onClick={closeDrawerHandler}
      >
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <span className="main-navigation__logo">
          <Link to="/">
            <img src={ejbBlackLogo} alt="Home" />
          </Link>
        </span>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;

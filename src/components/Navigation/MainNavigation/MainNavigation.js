import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { MenuSharp as MenuSharpIcon } from '@material-ui/icons';

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
        <IconButton
          aria-label="mobile navigation menu"
          onClick={openDrawerHandler}
        >
          <MenuSharpIcon
            color="action"
            fontSize="large"
          />
        </IconButton>

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

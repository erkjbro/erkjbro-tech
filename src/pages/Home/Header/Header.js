import './Header.scss';
import ejbOrangeLogo from '../../../assets/images/ejb-orange-logo-v1.png';

const Header = () => (
  <div className="Header">
    <img src={ejbOrangeLogo} alt="Erik J Brown" />
  </div>
);

export default Header;

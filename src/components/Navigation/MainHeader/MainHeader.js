import './MainHeader.scss';

const MainHeader = (props) => (
  <header className="main-header">
    {props.children}
  </header>
);

export default MainHeader;

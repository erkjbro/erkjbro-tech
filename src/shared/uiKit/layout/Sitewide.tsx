import { Container, type ContainerProps, type Breakpoint } from '@mui/material'

import Logo from 'shared/assets/images/ejb-black-logo-v2.png'

const Sitewide: React.FC<ContainerProps> = ({children, ...rest}) => (
  <Container
    disableGutters
    maxWidth={false}
    {...rest}
  >
    <nav style={{ backgroundColor: '#a0e03a', display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
      <img src={Logo} alt="logo" width="50px"/>
    </nav>
    {children}
  </Container>
);

export default Sitewide;

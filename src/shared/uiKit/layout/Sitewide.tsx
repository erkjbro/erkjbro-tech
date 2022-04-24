import React from 'react';
import { Container, type ContainerProps, type Breakpoint } from '@mui/material';

import Logo from 'shared/assets/images/ejb-black-logo-v2.png';

const Sitewide: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <Container
    disableGutters
    maxWidth={false}
    {...rest}
  >
    <nav style={{ backgroundColor: '#11114a', display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
      <span style={{ backgroundColor: 'whitesmoke', padding: '10px', border: '3px solid darkorange', borderRadius: '50%' }}>
        <img src={Logo} alt="logo" width="50px" />
      </span>
    </nav>
    {children}
  </Container>
);

export default Sitewide;

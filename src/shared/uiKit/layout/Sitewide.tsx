import { Container, type ContainerProps, type Breakpoint } from '@mui/material'

const Sitewide: React.FC<ContainerProps> = ({children, ...rest}) => (
  <Container
    disableGutters
    maxWidth={false}
    {...rest}
  >
    <nav style={{ backgroundColor: '#a0e03a' }}>
      BUTTONS
    </nav>
    {children}
  </Container>
);

export default Sitewide;

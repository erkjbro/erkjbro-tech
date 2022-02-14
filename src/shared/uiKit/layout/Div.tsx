import React from 'react';
import { Box, type BoxProps } from '@mui/material';

const Div: React.FC<BoxProps> = ({
  children,
  sx
}) => (
  <Box sx={{ ...sx }}>
    {children}
  </Box>
);

export default Div;

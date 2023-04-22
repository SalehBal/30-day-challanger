import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
function Navigation() {
  const theme = useTheme();
  const navStyles = { backgroundColor: theme.palette.grey[600], height: '60px', width: '100%' };
  return (
    <Box sx={navStyles}>
      <Typography>Navigation</Typography>
    </Box>
  );
}

export default Navigation;

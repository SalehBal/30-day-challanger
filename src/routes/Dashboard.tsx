import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import MyDrawer from '../Components/MyDrawer';
import Navigation from '../Components/Navigation';

function Dashboard() {
  return (
    <Box>
      <Navigation />
      <MyDrawer />
    </Box>
  );
}

export default Dashboard;

import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import MyDrawer from '../Components/MyDrawer';
import Navigation from '../Components/Navigation';
import Calendar from '../Components/Calendar';

function Dashboard() {
  return (
    <Box>
      <Calendar />
      {/* <Navigation />
      <MyDrawer /> */}
    </Box>
  );
}

export default Dashboard;

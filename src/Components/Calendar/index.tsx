import { Box, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Calendar() {
  const calendarState = useSelector((state: RootState) => state.calendar);
  return (
    <Box>
      <Grid container spacing={2}>
        {calendarState.days.map((e, i) => (
          <Grid key={i} item xs={2}>
            DAY
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Calendar;

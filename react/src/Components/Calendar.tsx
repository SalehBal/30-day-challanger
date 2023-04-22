import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Day from './Day';

const boxStyles = { height: '20vh', border: '2px solid #000 ' };
function Calendar() {
  const calendarState = useSelector((state: RootState) => state.calendar);
  return (
    <Box>
      <Grid container>
        {calendarState.days.map((e, i) => (
          <Grid sx={boxStyles} key={i} item xs={2}>
            <Day />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Calendar;

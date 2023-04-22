// types
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Action {
  index: number;
  status: 'success' | 'fail';
}
interface Day {
  date?: Date;
  status: 'success' | 'fail' | null;
}
interface CalendarState {
  days: Day[];
}

// initial state
const initialState: CalendarState = {
  days: [
    // 10
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    // 20
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    // 30
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
    { status: null },
  ],
};

// ==============================|| SLICE - THEME ||============================== //

const calendar = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    compleateTask: (state: CalendarState, action: PayloadAction<Action>) => {
      const index = action.payload.index;
      state.days[index];
    },
  },
});

export default calendar.reducer;

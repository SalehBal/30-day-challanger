import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CalendarReducer from './CalendarReducer';

const allReducers = combineReducers({ calendar: CalendarReducer });

const store = configureStore({ reducer: allReducers });

const { dispatch } = store;

export { store, dispatch };

export type RootState = ReturnType<typeof store.getState>;

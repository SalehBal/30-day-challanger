import { Route, Routes } from 'react-router-dom';
import Calendar from './Calendar';
import Auth from './Auth';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/calendar' element={<Calendar />} />
    </Routes>
  );
}

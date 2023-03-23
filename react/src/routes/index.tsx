import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Auth from './Auth';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

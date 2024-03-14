import { Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="*" element={<>NotFound</>} />
      </Routes>
      <Outlet />
    </>
  );
};

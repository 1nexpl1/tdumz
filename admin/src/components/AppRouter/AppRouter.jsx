import { Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from '../../pages/SignInPage';
import DashboardPage from '../../pages/DashboardPage';
import Items from '../items/Items';
import Client from '../client/client';

const AppRouter = ({ isAuth }) => {
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="item" element={<Items />} />
          <Route path="client" element={<Client />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </>
      ) : (
        <>
          <Route path="signin" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="signin" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';

const AppRouter = () => {
  const isAuth = true;

  return (
    isAuth
    ? 
    <Routes>
      {privateRoutes.map(route =>
        <Route 
          element={route.component}
          path={route.path}
          exact={route.exact = true}
        />
      )}
      {/* если ввести несущ-й путь перекинуть на этот компонент */}
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
    :
    <Routes>
      {publicRoutes.map(route =>
        <Route 
          element={route.component}
          path={route.path}
          exact={route.exact = true}
        />
      )}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;

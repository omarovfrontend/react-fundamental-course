import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
    ? 
    <Routes>
      {privateRoutes.map(route =>
        <Route 
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
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
          exact={route.exact}
          key={route.path}
        />
      )}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;

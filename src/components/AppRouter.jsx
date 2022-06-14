import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Posts from '../pages/Posts';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
  
      {/* если ввести несущ-й путь перекинуть на этот компонент */}
      <Route path="*" element={<Navigate to="/error" />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  )
}

export default AppRouter;

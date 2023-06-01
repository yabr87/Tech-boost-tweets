import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './App.styles';

import MainLayout from 'layouts/MainLayout';
const HomePage = lazy(() => import('pages/HomePage'));
const TweetsPage = lazy(() => import('pages/TweetsPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageWrapper } from './Containers/PageWrapper/PageWrapper';
import { Spinner } from './Spinner';
import { routesPath } from 'router/routesPath';
import { MainWrapper } from './Containers/MainWrapper';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);

export const App = () => {
  return (
    <PageWrapper>
      <Header />
      <MainWrapper>
        <Routes>
          <Route
            path={routesPath.HOME}
            element={
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path={routesPath.BOOK_DETAIL}
            element={
              <Suspense fallback={<Spinner />}>
                <div>Book detail</div>
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="books" />} />
        </Routes>
      </MainWrapper>

      <Footer />
    </PageWrapper>
  );
};

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageWrapper } from './Containers/PageWrapper/PageWrapper';
import { Spinner } from './Spinner';
import { routesPath } from 'router/routesPath';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);

export const App = () => {
  return (
    <PageWrapper>
      <Header />
      {/* <Routes>
        <Route
          path={''}
          element={
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes> */}
      <Footer />
    </PageWrapper>
  );
};

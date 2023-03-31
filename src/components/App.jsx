import { lazy, Suspense } from 'react';
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
const BookDetailsPage = lazy(() =>
  import('../pages/BookDetailsPage' /* webpackChunkName: "book-page" */)
);
const BookEditPage = lazy(() =>
  import('../pages/BookEditPage' /* webpackChunkName: "book-edit-page" */)
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
            path={routesPath.HOME + routesPath.BOOK_DETAIL}
            element={
              <Suspense fallback={<Spinner />}>
                <BookDetailsPage />
              </Suspense>
            }
          />

          <Route
            path={
              routesPath.HOME + routesPath.BOOK_DETAIL + routesPath.BOOK_EDIT
            }
            element={
              <Suspense fallback={<Spinner />}>
                <BookEditPage />
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to={routesPath.HOME} />} />
        </Routes>
      </MainWrapper>

      <Footer />
    </PageWrapper>
  );
};

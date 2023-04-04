import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as selectors from 'redux/selectors';
import { useSelector } from 'react-redux';
import { userRoles } from 'constants/userRoles';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageWrapper } from './Containers/PageWrapper/PageWrapper';
import { Spinner } from './Spinner';
import { routesPath } from 'router/routesPath';
import { MainWrapper } from './Containers/MainWrapper';
import { useDispatch } from 'react-redux';
import { setUserRole } from 'redux/slice/slice-user';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const BookDetailsPage = lazy(() =>
  import('../pages/BookDetailsPage' /* webpackChunkName: "book-page" */)
);
const BookEditPage = lazy(() =>
  import('../pages/BookEditPage' /* webpackChunkName: "book-edit-page" */)
);
const BookAddPage = lazy(() =>
  import('../pages/BookAddPage' /* webpackChunkName: "book-add-page" */)
);
const UserPage = lazy(() =>
  import('../pages/UserPage' /* webpackChunkName: "user-page" */)
);
const AuthPage = lazy(() =>
  import('../pages/AuthPage' /* webpackChunkName: "auth-page" */)
);

const OrderPage = lazy(() =>
  import('../pages/OrderPage' /* webpackChunkName: "order-page" */)
);

export const App = () => {
  const dispatch = useDispatch();
  const userRole = useSelector(selectors.getUserRole);
  useEffect(() => {
    dispatch(setUserRole(userRoles.BUYER));
  }, [dispatch]);

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
            path={routesPath.ORDER}
            element={
              <Suspense fallback={<Spinner />}>
                <OrderPage />
              </Suspense>
            }
          />

          <Route
            path={routesPath.REGISTER}
            element={
              <Suspense fallback={<Spinner />}>
                <AuthPage isRegister />
              </Suspense>
            }
          />
          <Route
            path={routesPath.LOGIN}
            element={
              <Suspense fallback={<Spinner />}>
                <AuthPage isRegister={false} />
              </Suspense>
            }
          />
          <Route
            path={routesPath.PROFILE}
            element={
              <Suspense fallback={<Spinner />}>
                <UserPage />
              </Suspense>
            }
          />

          {userRole === userRoles.ADMIN && (
            <Route
              path={routesPath.HOME + routesPath.BOOK_ADD}
              element={
                <Suspense fallback={<Spinner />}>
                  <BookAddPage />
                </Suspense>
              }
            />
          )}

          <Route
            path={routesPath.HOME + routesPath.BOOK_DETAIL}
            element={
              <Suspense fallback={<Spinner />}>
                <BookDetailsPage />
              </Suspense>
            }
          />

          {userRole === userRoles.ADMIN && (
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
          )}

          <Route path="*" element={<Navigate to={routesPath.HOME} />} />
        </Routes>
      </MainWrapper>

      <Footer />
    </PageWrapper>
  );
};

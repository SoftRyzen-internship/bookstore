import { Navigate } from 'react-router';

import { routesPath } from '../../router/routesPath';

export const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to={routesPath.HOME} replace />;
  }

  return children;
};

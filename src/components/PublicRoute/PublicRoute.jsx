import { Navigate } from 'react-router';

import { routesPath } from 'routes/routesPath';

export const PublicRoute = ({ isAuth, children }) => {
  if (isAuth) {
    return <Navigate to={routesPath.HOME} replace />;
  }

  return children;
};

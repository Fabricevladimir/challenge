import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {useUser} from '../../../contexts/UserContext';

function ProtectedRoute({path, component, ...rest}) {
  const [user] = useUser();

  return user ? (
    <Route path={path} component={component} {...rest} />
  ) : (
    <Redirect to="/login" />
  );
}

export default ProtectedRoute;

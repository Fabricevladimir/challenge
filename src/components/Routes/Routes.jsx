import {Route, Switch} from 'react-router-dom';

import Login from '../../screens/Login';
import Signup from '../../screens/SignUp';
import Dashboard from '../../screens/Dashboard';

import ProtectedRoute from '../common/ProtectedRoute/ProtectedRoute';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute exact path="/" component={Dashboard} />
    </Switch>
  );
}

export default Routes;

import React, {Suspense} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Loader from '../common/Loader/Loader';
// import Toolbar from '../Toolbar/Toolbar';
import {UserProvider} from '../../contexts/UserContext';
import './App.css';

const Routes = React.lazy(() => import('../Routes/Routes'));

function App() {
  const history = createBrowserHistory();

  return (
    <UserProvider>
      <div className="App">
        <Router history={history} hashType="slash">
          {/* <Toolbar /> */}
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;

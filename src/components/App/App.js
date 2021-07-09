import React, {Suspense} from 'react';
import {HashRouter as Router} from 'react-router-dom';

import Loader from '../common/Loader/Loader';
// import Toolbar from '../Toolbar/Toolbar';
import {UserProvider} from '../../contexts/UserContext';
import './App.css';

const Routes = React.lazy(() => import('../Routes/Routes'));

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router hashType="slash">
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

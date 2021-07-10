import React, {Suspense} from 'react';
import {HashRouter as Router} from 'react-router-dom';

import Loader from '../common/Loader/Loader';
import {UserProvider} from '../../contexts/UserContext';

import './App.css';

const Routes = React.lazy(() => import('../Routes/Routes'));

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router hashType="slash">
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;

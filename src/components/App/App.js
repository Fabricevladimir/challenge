import React, {Suspense} from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// import Toolbar from '../Toolbar/Toolbar';
import './App.css';

const Routes = React.lazy(() => import('../Routes/Routes'));

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        {/* <Toolbar /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

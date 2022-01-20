import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from './components/header/header';
import Auth from './page/Auth';
function App() {
  return (
    <React.Suspense >
      <Router>
        <Switch>
          <Route exact path="/author">
            <Auth/>
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;

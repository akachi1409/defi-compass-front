import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from './components/header/header';
import Auth from './page/Auth';
import NFTGenerator from './page/NFTGenerator'
import ItemPage from './page/ItemPage'
function App() {
  return (
    <React.Suspense >
      <Router>
        <Switch>
          <Route exact path="/author">
            <Auth/>
          </Route>
          <Route exact path="/generator">
            <NFTGenerator/>
          </Route>
          <Route exact path="/item">
            <ItemPage/>
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;

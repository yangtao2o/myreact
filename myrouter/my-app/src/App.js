import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  useLocation,
  Redirect,
  useParams
} from "react-router-dom";
import "./App.css";

import Basic from "./component/Basic";
import UrlParams from "./component/UrlParams";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul className="nav-item">
            <li>
              <NavLink to="/">
                Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/url-params">Url-params</NavLink>
            </li>
          </ul>
          <section className="nav-content">
            <Switch>
              <Route exact path="/" component={Basic} />
              <Route path="/url-params" component={UrlParams} />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </header>
      </div>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;

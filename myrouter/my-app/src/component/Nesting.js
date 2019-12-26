import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
  useLocation
} from "react-router-dom";

import GetParams from "./GetParams";

export default function UrlParams() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/hommme">hommme</Link>
        </li>
        <li>
          <Link to="/topics">topics</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/hommme" render={() => <h3>hommme</h3>} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </Router>
  );
}

function Topics() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Topics</h3>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}`} children={() => (<div>Please select a topic.</div>)} />
        <Route path={`${path}/:id`}  children={<GetParams />} />
      </Switch>
      <Route component={Pathname} />
    </div>
  );
}

function Pathname() {
  let location = useLocation();
  return (
    <h3>
      Pathname: <code>{location.pathname}</code>
    </h3>
  );
}
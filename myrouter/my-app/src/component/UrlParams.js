import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";

export default function UrlParams() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/:id" children={<Child />} />
      </Switch>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

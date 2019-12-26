import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";

import GetParams from "./GetParams";

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
        <Route path="/:id" children={<GetParams />} />
      </Switch>
    </Router>
  );
}

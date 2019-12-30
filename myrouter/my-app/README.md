# React-Router

主要是根据 [react-router 文档](https://reacttraining.com/react-router/web) 练习 Demo！

## Start

```shell
yarn
yarn start
```

## Method

### Basic

```js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Basic() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```

### Nesting

```js
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
        <Route
          exact
          path={`${path}`}
          children={() => <div>Please select a topic.</div>}
        />
        <Route path={`${path}/:id`} children={<GetParams />} />
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
```

### RouteMatch

```js
import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function RouteMatch() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <p>Path:{path}</p>
      <p>url:{url}</p>
    </div>
  );
}
```

### GetParams

```js
import React from "react";
import { useParams } from "react-router-dom";

export default function GetParams() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
```

### UrlParams

```js
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

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
```

### AuthWorkflow

```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome！
      <button
        onClick={() => fakeAuth.signout(() => history.push("/auth-workflow"))}
      >
        Signout
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

function LoginPage() {
  let location = useLocation();
  let history = useHistory();

  let from = location.state || { from: { pathname: "/auth-workflow" } };
  let login = () => {
    fakeAuth.authenticate(() => history.replace(from));
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
```

## 参考资料

- [react-router 文档](https://reacttraining.com/react-router/web)

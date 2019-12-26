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

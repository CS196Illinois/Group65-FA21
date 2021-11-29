import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "test", element: <Test /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

render(<AppWrapper />, document.getElementById("root"));

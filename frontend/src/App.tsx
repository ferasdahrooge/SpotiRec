import React from "react";
import "./App.scss";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Main from "./Layout/Layout";
import Home from "./Content/Home/Home";
import About from "./Content/About/About";
import Results from "./Content/Results/Results";

const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Main content={Home} />,
    },
    {
      path: "/about",
      element: <Main content={About} />,
    },
    {
      path: "/results",
      element: <Main content={Results} />,
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <div className='App'>
      <Router>
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;

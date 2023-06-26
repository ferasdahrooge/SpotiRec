import React from "react";
import "./App.scss";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Header from "./Components/Header/Header";

const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <Header title='SpotiRec' links={{ "/": "Home", "/about": "About" }} />
      ),
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

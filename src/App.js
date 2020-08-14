import React from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const BooksApp = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default BooksApp;

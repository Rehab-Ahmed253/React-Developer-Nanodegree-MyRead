import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((result) => {
      setBooks(result);
    });
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home books={books} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default BooksApp;

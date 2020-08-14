import React, { useState, useEffect } from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  const handleValueChange = (e, book) => {
    BooksAPI.update(book, e.target.value);
  };

  useEffect(() => {
    BooksAPI.getAll().then((result) => {
      setBooks(result);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchPage books={books} handleValueChange={handleValueChange} />
          </Route>
          <Route path="/">
            <Home books={books} handleValueChange={handleValueChange} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default BooksApp;

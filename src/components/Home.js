import React, { useState, useEffect } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((result) => {
      setBooks(result);
    });
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={books}
            setBooks={setBooks}
            shelf="currentlyReading"
            shelfName="Currently Reading"
          />
          <BookShelf
            books={books}
            setBooks={setBooks}
            shelf="wantToRead"
            shelfName="Want to Read"
          />
          <BookShelf
            books={books}
            setBooks={setBooks}
            shelf="read"
            shelfName="Read"
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;

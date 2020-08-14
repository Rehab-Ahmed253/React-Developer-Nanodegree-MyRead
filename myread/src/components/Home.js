import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const Home = ({ books }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={books.filter((book) => book.shelf === "currentlyReading")}
            shelfName="Currently Reading"
          />
          <BookShelf
            books={books.filter((book) => book.shelf === "wantToRead")}
            shelfName="Want to Read"
          />
          <BookShelf
            books={books.filter((book) => book.shelf === "read")}
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

import React from "react";
import BookTile from "./BookTile";
import * as BooksAPI from "../BooksAPI";

const BookShelf = ({ books, shelfName, shelf }) => {
  const handleValueChange = (e, book) => {
    BooksAPI.update(book, e.target.value);
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf)
            .map((book) => (
              <li key={book.id}>
                <BookTile book={book} handleValueChange={handleValueChange} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

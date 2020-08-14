import React from "react";
import BookTile from "./BookTile";

const BookShelf = ({ books, setBooks, shelfName, shelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf)
            .map((book) => (
              <li key={book.id}>
                <BookTile books={books} setBooks={setBooks} book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

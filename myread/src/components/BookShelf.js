import React from "react";
import BookTile from "./BookTile";

const BookShelf = ({ books, shelfName }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <BookTile book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

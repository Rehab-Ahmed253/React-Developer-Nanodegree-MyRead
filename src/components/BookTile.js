import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";

const BookTile = ({ book, books, setBooks }) => {
  const [value, setValue] = useState(book.shelf || "none");
  const url = book.imageLinks ? book.imageLinks.thumbnail : null;

  useEffect(() => {
    const temp = { ...book, shelf: value };
    setBooks(books.map((b) => (b.id === book.id ? temp : b)));
    BooksAPI.update(book, value);
  }, [value]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${url}`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={value}
            selected={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default BookTile;

import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";

const BookTile = ({ book }) => {
  const [value, setValue] = useState(book.shelf || "none");

  useEffect(() => {
    BooksAPI.update(book, value);
  }, [book, value]);

  const handleChange = (event) => {
    if (event.target.value !== value) {
      setValue(event.target.value);
    }
  };
  if (!book.hasOwnProperty("imageLinks")) {
    return null;
  }
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select value={value} selected={value} onChange={handleChange}>
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

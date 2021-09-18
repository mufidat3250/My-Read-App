import React from "react";

const Book = ({ book, updateBookShelf }) => {
  const show = true;
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
          <select
            defaultValue={book.shelf ? book.shelf : "none"}
            onChange={(e) => updateBookShelf(book, e.target.value)}
          >
            <option className="options" value="move" disabled>
              Move to...
            </option>
            <option className="options" value="currentlyReading">
              currently Reading
            </option>
            <option className="options" value="wantToRead">
              Want to Read
            </option>
            <option className="options" value="read">
              Read
            </option>
            <option className="options" value="none">
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default Book;

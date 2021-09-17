import React from "react";
import { Link } from "react-router-dom";
import Shelves from "./Shelves";
import Title from "./Title";

const Home = ({ books, updateBookShelf }) => {
  return (
    <div className="list-books">
      <Title />
      <div className="list-books-content">
        <div>
          <Shelves books={books} updateBookShelf={updateBookShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Shelves from "./components/Shelves";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Title from "./components/Title";
import Book from "./components/Book";
import Search from "./components/Search";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdToBook, setMapOfIdToBooks] = useState(new Map());
  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
      setMapOfIdToBooks(createMapofBook(data));
    });
  }, []);

  useEffect(
    () => {
      let isActive = true;

      if (query) {
        BooksAPI.search(query).then((data) => {
          if (data.error) {
            setSearchBooks([]);
          } else {
            if (isActive) {
              console.log(data);
              setSearchBooks(data);
            }
          }
        });
      }
      return () => {
        isActive = false;
        setSearchBooks([]);
      };
    },
    [query]
  );

  useEffect(
    () => {
      const combined = searchBooks.map((book) => {
        if (mapOfIdToBook.has(book.id)) {
          return mapOfIdToBook.get(book.id);
        } else {
          return book;
        }
      });
      console.log(setMergedBooks(combined));
    },
    [searchBooks]
  );

  const createMapofBook = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  const updateBookShelf = (book, whereTo) => {
    const updatedBook = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = whereTo;
        return book;
      }
      return b;
    });
    setBooks(updatedBook);
    BooksAPI.update(book, whereTo);
  };

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <Home {...props} books={books} updateBookShelf={updateBookShelf} />
        )}
      />
      <Route path="/search">
        <Search
          setQuery={setQuery}
          updateBookShelf={updateBookShelf}
          query={query}
          mergedBooks={mergedBooks}
        />
      </Route>
    </Switch>
  );
};

export default BooksApp;

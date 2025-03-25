import React from "react";
import { useState } from "react";
import styles from "./BooksPage.module.css";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addBook,
  deleteBook,
  updateBook,
  updateBooks,
} from "../store/booksSlice";

function BooksPage() {
  //   const [books, setBooks] = useState(initialBooks);
  const [bookToBeEdited, setBookToBeEdited] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const books = useSelector((state) => state.booksAuth.books);
  console.log(books);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   function handleShowAddForm() {}
  function handleSelectBook(book) {
    setSelectedBook(book);
    navigate(`/bookDetails/${book.id}`);
  }

  const handleShowAddForm = () => {
    // setSelectedBook(null);
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setBookToBeEdited(null);
  };

  const handleAddBook = (newBook) => {
    const bookWithId = {
      ...newBook,
      id: books.length + 1,
      // cover: "https://via.placeholder.com/200x300",
    };
    const updatedBooks = [...books, bookWithId];
    dispatch(addBook(updatedBooks));
    dispatch(updateBooks({ books: updatedBooks }));
    console.log(bookWithId);
    setShowAddForm(false);
  };

  const handleEditBook = (book) => {
    setShowAddForm(true);
    setBookToBeEdited(book);
  };

  const handleUpdateBook = (book) => {
    console.log(book);
    const updatedBooks = books.map((b) => {
      if (b.id == book.id) {
        return { ...book };
      }
      return b;
    });
    dispatch(updateBook(updatedBooks));
    setShowAddForm(false);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    // if (selectedBook && selectedBook.id === bookId) {
    //   setSelectedBook(null);
    // }
    dispatch(deleteBook(updatedBooks));
  };
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title text-center">Book Inventory</h1>
        <p className="section-subtitle text-center">
          Browse, search, and manage your book collection
        </p>

        <div className={styles.booksPageContent}>
          <div className={styles.booksListSection}>
            <div className={styles.booksControls}>
              {/* <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className={styles.searchInput}
                />
                {searchTerm && (
                  <button
                    className={styles.clearSearchBtn}
                    onClick={handleClearSearch}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div> */}
              <button
                className={`btn btn-primary ${styles.addBookBtn}`}
                onClick={handleShowAddForm}
              >
                + Add Book
              </button>
            </div>

            <BookList
              books={books}
              onSelectBook={handleSelectBook}
              selectedBookId={selectedBook ? selectedBook.id : null}
              handleDeleteBook={handleDeleteBook}
              handleEditBook={handleEditBook}
            />
          </div>

          {showAddForm && (
            <div className={styles.bookDetailsSection}>
              <AddBookForm
                book={bookToBeEdited}
                onAddBook={handleAddBook}
                onUpdateBook={handleUpdateBook}
                onCancel={handleCloseForm}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BooksPage;

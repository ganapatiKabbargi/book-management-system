import React from "react";
import styles from "./BookList.module.css";

function BookList({ books, onSelectBook, selectedBookId, handleDeleteBook,handleEditBook }) {
  if (books.length === 0) {
    return (
      <div className={styles.emptyList}>
        <p>No books found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <div
          key={book.id}
          className={`${styles.bookItem} ${
            selectedBookId === book.id ? styles.selected : ""
          }`}
        >
          <img
            src={book.cover || "/placeholder.svg"}
            alt={book.title}
            className={styles.bookCover}
          />
          <div className={styles.bookInfo} onClick={() => onSelectBook(book)}>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookAuthor}>by {book.author}</p>
            <div className={styles.bookMeta}>
              <span className={styles.bookGenre}>{book.genre}</span>
              <span className={styles.bookYear}>{book.year}</span>
            </div>
          </div>
          <div className={styles.detailsActions}>
            <button className="btn btn-secondary" onClick={() => {
                handleEditBook(book);
              }}>Edit</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDeleteBook(book.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;

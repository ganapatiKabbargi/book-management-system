import React from "react";
import styles from "./BookList.module.css";

function BookList({ books, onSelectBook, selectedBookId }) {
  if (books.length === 0) {
    return (
      <div className={styles.emptyList}>
        <p>No books found matching your search criteria.</p>
      </div>
    );
  }

  function handleDelete() {}
  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <div
          key={book.id}
          className={`${styles.bookItem} ${
            selectedBookId === book.id ? styles.selected : ""
          }`}
          onClick={() => onSelectBook(book)}
        >
          <img
            src={book.cover || "/placeholder.svg"}
            alt={book.title}
            className={styles.bookCover}
          />
          <div className={styles.bookInfo}>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookAuthor}>by {book.author}</p>
            <div className={styles.bookMeta}>
              <span className={styles.bookGenre}>{book.genre}</span>
              <span className={styles.bookYear}>{book.year}</span>
            </div>
          </div>
          <div className={styles.detailsActions}>
            <button className="btn btn-secondary">Edit</button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;

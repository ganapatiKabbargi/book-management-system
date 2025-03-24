import React from "react";
import { useState } from "react";
import styles from "./BooksPage.module.css";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";

const initialBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    cover: "https://via.placeholder.com/200x300",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    cover: "https://via.placeholder.com/200x300",
    description:
      "A dystopian social science fiction novel and cautionary tale set in a totalitarian society.",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    year: 1925,
    cover: "https://via.placeholder.com/200x300",
    description:
      "A novel that examines the dark side of the American Dream during the Roaring Twenties.",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
    cover: "https://via.placeholder.com/200x300",
    description:
      "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet.",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    cover: "https://via.placeholder.com/200x300",
    description:
      "A children's fantasy novel set in a fictional world that follows the quest of home-loving Bilbo Baggins.",
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
    cover: "https://via.placeholder.com/200x300",
    description:
      "The first novel in the Harry Potter series that follows a young wizard's adventures at Hogwarts School of Witchcraft and Wizardry.",
  },
];
function BooksPage() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  //   function handleShowAddForm() {}
  function handleSelectBook() {}
  const handleShowAddForm = () => {
    setSelectedBook(null);
    setShowAddForm(true);
  };

  const handleAddBook = (newBook) => {
    const bookWithId = {
      ...newBook,
      id: books.length + 1,
      cover: "https://via.placeholder.com/200x300",
    };
    setBooks([...books, bookWithId]);
    console.log(bookWithId);
    setShowAddForm(false);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
    if (selectedBook && selectedBook.id === bookId) {
      setSelectedBook(null);
    }
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
            />
          </div>

          <div className={styles.bookDetailsSection}>
            <AddBookForm
              onAddBook={handleAddBook}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksPage;

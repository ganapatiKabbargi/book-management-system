import React from "react";
import styles from "./BookDetails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const initialBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    cover:
      "https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg",
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
function BookDetails() {
  const books = useSelector((state) => state.booksAuth.books);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.bookId);
  const selectedBook = books.filter((b) => {
    return b.id == params.bookId;
  });
  const [book] = selectedBook;
  console.log(book);
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${book.title}"?`)) {
      onDelete(book.id);
    }
  };

  function onClose() {
    navigate("/");
  }
  return (
    <div className={styles.bookDetails}>
      <div className={styles.detailsHeader}>
        <h2 className={styles.detailsTitle}>Book Details</h2>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close details"
        >
          ✕
        </button>
      </div>

      <div className={styles.detailsContent}>
        <div className={styles.coverContainer}>
          <img
            src={book.cover || "/placeholder.svg"}
            alt={book.title}
            className={styles.bookCover}
          />
        </div>

        <div className={styles.bookInfo}>
          <h3 className={styles.bookTitle}>{book.title}</h3>
          <p className={styles.bookAuthor}>by {book.author}</p>

          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Genre:</span>
              <span className={styles.infoValue}>{book.genre}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Year:</span>
              <span className={styles.infoValue}>{book.year}</span>
            </div>
          </div>

          <div className={styles.descriptionSection}>
            <h4 className={styles.descriptionTitle}>Description</h4>
            <p className={styles.description}>{book.description}</p>
          </div>
        </div>
      </div>

      {/* <div className={styles.detailsActions}>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div> */}
    </div>
  );
}

export default BookDetails;
